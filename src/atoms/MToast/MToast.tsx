import {
	CheckCircleIcon,
	ExclamationCircleIcon,
	InformationCircleIcon,
	XCircleIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { ComponentProps } from "react";
import {
	Button as AriaButton,
	Text as AriaText,
	UNSTABLE_Toast as AriaToast,
	UNSTABLE_ToastContent as AriaToastContent,
	UNSTABLE_ToastRegion as AriaToastRegion,
	UNSTABLE_ToastQueue as ToastQueue,
	type QueuedToast,
} from "react-aria-components";
import alertStyles from "../MAlert/MAlert.module.css";
import { MFlex } from "../MFlex";
import textStyles from "../MText/MText.module.css";
import styles from "./MToast.module.css";

export type MToastMode = "info" | "success" | "warning" | "error";

export type MToastContent = {
	mode?: MToastMode;
	title: string;
	description?: string;
};

const modeIcon = {
	info: InformationCircleIcon,
	success: CheckCircleIcon,
	warning: ExclamationCircleIcon,
	error: XCircleIcon,
} satisfies Record<MToastMode, typeof InformationCircleIcon>;

/** Default timeout (ms) before a toast auto-dismisses. Errors stay until closed. */
const AUTO_DISMISS_MS = 5000;

/** Singleton queue — one toast region per app. Trigger toasts via `mToast.*`. */
export const mToastQueue = new ToastQueue<MToastContent>({
	maxVisibleToasts: 5,
});

export const mToast = {
	show: (content: MToastContent) =>
		mToastQueue.add(content, {
			timeout: content.mode === "error" ? undefined : AUTO_DISMISS_MS,
		}),
	info: (title: string, description?: string) =>
		mToast.show({ mode: "info", title, description }),
	success: (title: string, description?: string) =>
		mToast.show({ mode: "success", title, description }),
	warning: (title: string, description?: string) =>
		mToast.show({ mode: "warning", title, description }),
	error: (title: string, description?: string) =>
		mToast.show({ mode: "error", title, description }),
};

const MToastItem = ({ toast }: { toast: QueuedToast<MToastContent> }) => {
	const mode = toast.content.mode ?? "info";
	const Icon = modeIcon[mode];

	return (
		<AriaToast
			toast={toast}
			className={clsx(
				alertStyles.alert,
				alertStyles[`alert-mode-${mode}`],
				styles.toast,
			)}
		>
			<MFlex direction="column" gap="xs" align="stretch" wrap="nowrap" className={styles.body}>
				<MFlex gap="s" align="center" wrap="nowrap" className={styles.headerRow}>
					<Icon width={18} className={styles.icon} />
					<AriaToastContent className={styles.content}>
						<AriaText
							slot="title"
							className={clsx(
								textStyles["size-m"],
								textStyles["mode-inherit"],
								styles.title,
							)}
						>
							{toast.content.title}
						</AriaText>
					</AriaToastContent>
					<AriaButton
						slot="close"
						className={styles.dismiss}
						aria-label="Dismiss notification"
					>
						<XMarkIcon width={14} />
					</AriaButton>
				</MFlex>
				{toast.content.description && (
					<AriaText
						slot="description"
						className={clsx(
							textStyles["size-s"],
							textStyles["mode-inherit"],
							styles.description,
						)}
					>
						{toast.content.description}
					</AriaText>
				)}
			</MFlex>
		</AriaToast>
	);
};

export type MToastRegionProps = Omit<
	ComponentProps<typeof AriaToastRegion<MToastContent>>,
	"queue" | "children"
>;

/** Mount once near the app root. Trigger toasts from anywhere via `mToast.*`. */
export const MToastRegion = ({ className, ...restProps }: MToastRegionProps) => (
	<AriaToastRegion
		queue={mToastQueue}
		className={clsx(styles.region, className)}
		{...restProps}
	>
		{({ toast }) => <MToastItem toast={toast} />}
	</AriaToastRegion>
);

export default MToastRegion;
