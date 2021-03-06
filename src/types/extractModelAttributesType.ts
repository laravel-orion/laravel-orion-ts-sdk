import { Model } from '../model';

export type ExtractModelAttributesType<T> = T extends Model<
	infer Attributes,
	infer PersistedAttributes,
	infer Relations,
	infer Key,
	infer AllAttributes
>
	? Attributes
	: never;
