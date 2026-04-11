import clsx from "clsx";
import {
	type ComponentProps,
	type ReactNode,
	forwardRef,
	useId,
	useMemo,
} from "react";
import type { TComponentSize } from "../../types/TComponentSize";
import type { TComponentStatus } from "../../types/TComponentStatus";
import MFieldDescription from "../MFieldDescription/MFieldDescription";
import MFlex from "../MFlex/MFlex";
import MLabel from "../MLabel/MLabel";
import styles from "./MProgressBar.module.css";

export type ProgressBarProps = Omit<
	ComponentProps<"progress">,
	"value" | "max"
> &
	Partial<TComponentStatus> & {
		label?: ReactNode;
		description?: ReactNode;
		wrapperClassName?: string;
		footerClassName?: string;
		value?: number;
		max?: number;
		size?: Extract<TComponentSize["size"], "s" | "m" | "l">;
		showValue?: boolean;
		valueFormatter?: (value: number, max: number) => ReactNode;
	};

const getPercent = (value: number, max: number) => {
	if (max <= 0) {
		return 0;
	}

	return Math.min(Math.max((value / max) * 100, 0), 100);
};

export const MProgressBar = forwardRef<HTMLProgressElement, ProgressBarProps>(
	(
		{
			className,
			wrapperClassName,
			footerClassName,
			status = "regular",
			label,
			description,
			id,
			value,
			max = 100,
			size = "m",
			showValue = false,
			valueFormatter,
			...restProps
		},
		ref,
	) => {
		const uuid = useId();
		const fieldId = useMemo(() => id ?? uuid, [id, uuid]);
		const numericValue = typeof value === "number" ? value : undefined;
		const percent =
			typeof numericValue === "number" ? getPercent(numericValue, max) : undefined;
		const roundedPercent =
			typeof percent === "number" ? Math.round(percent) : undefined;

		return (
			<MFlex
				direction="column"
				align="stretch"
				gap="xs"
				className={clsx(
					styles.progressBarWrapper,
					styles[status],
					wrapperClassName,
				)}
			>
				{(label || showValue) && (
					<MFlex
						align="center"
						justify="space-between"
						gap="m"
						className={styles.progressBarHeader}
					>
						{label && <MLabel htmlFor={fieldId}>{label}</MLabel>}
						{showValue &&
							typeof numericValue === "number" &&
							typeof percent === "number" && (
							<output htmlFor={fieldId} className={styles.value}>
								{valueFormatter
									? valueFormatter(numericValue, max)
									: `${roundedPercent}%`}
							</output>
						)}
					</MFlex>
				)}
				<progress
					ref={ref}
					id={fieldId}
					className={clsx(styles.progressBar, styles[`size-${size}`], className)}
					value={value}
					max={max}
					{...restProps}
				/>
				{description && (
					<div className={footerClassName}>
						<MFieldDescription status={status}>{description}</MFieldDescription>
					</div>
				)}
			</MFlex>
		);
	},
);

MProgressBar.displayName = "MProgressBar";

export default MProgressBar;
