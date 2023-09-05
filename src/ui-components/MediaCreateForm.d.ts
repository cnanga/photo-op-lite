/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MediaCreateFormInputValues = {
    description?: string;
    tags?: string;
    imageUrl?: string;
    imageKey?: string;
};
export declare type MediaCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    imageKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MediaCreateFormOverridesProps = {
    MediaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    imageKey?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MediaCreateFormProps = React.PropsWithChildren<{
    overrides?: MediaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MediaCreateFormInputValues) => MediaCreateFormInputValues;
    onSuccess?: (fields: MediaCreateFormInputValues) => void;
    onError?: (fields: MediaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MediaCreateFormInputValues) => MediaCreateFormInputValues;
    onValidate?: MediaCreateFormValidationValues;
} & React.CSSProperties>;
export default function MediaCreateForm(props: MediaCreateFormProps): React.ReactElement;
