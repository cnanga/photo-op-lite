import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly tags: string;
  readonly imageUrl?: string | null;
  readonly imageKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly tags: string;
  readonly imageUrl?: string | null;
  readonly imageKey?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Media = LazyLoading extends LazyLoadingDisabled ? EagerMedia : LazyMedia

export declare const Media: (new (init: ModelInit<Media>) => Media) & {
  copyOf(source: Media, mutator: (draft: MutableModel<Media>) => MutableModel<Media> | void): Media;
}