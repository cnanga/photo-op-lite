/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Media } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MediaUpdateFormInputValues = {
    description?: string;
    tags?: string;
    imageUrl?: string;
    imageKey?: string;
};
export declare type MediaUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    imageKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MediaUpdateFormOverridesProps = {
    MediaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    imageKey?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MediaUpdateFormProps = React.PropsWithChildren<{
    overrides?: MediaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    media?: Media;
    onSubmit?: (fields: MediaUpdateFormInputValues) => MediaUpdateFormInputValues;
    onSuccess?: (fields: MediaUpdateFormInputValues) => void;
    onError?: (fields: MediaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MediaUpdateFormInputValues) => MediaUpdateFormInputValues;
    onValidate?: MediaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MediaUpdateForm(props: MediaUpdateFormProps): React.ReactElement;
