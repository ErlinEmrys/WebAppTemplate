import type { FormatXMLElementFn } from "intl-messageformat";
import { getMessageFormatter, init, isLoading, locale, register, t } from "svelte-i18n";
import { derived, get } from "svelte/store";

export const TranslationsLoading = isLoading;

export const T = derived( t, () => FormatMessage );

register( "en", async () =>
{
	//TODO: FETCH JSON FROM SERVER HERE OR FROM FILE SYSTEM WHEN IN DEV MODE
	/*
	 try {
	 const url: string = 'http://erlin.cz/Files/en.json';
	 const response = await window.fetch(url);
	 return response.json();
	 }
	 catch(e)
	 {
	 Log.Err(e);
	 }
	 */
	return import("./../../locales/en.json");
} );

( async () => await init( {
	fallbackLocale: "en", initialLocale: "en",
} ) )().catch( e => Log.Err( "Translation initialization failed: ", e ) );

const regexp = /^#(\d?)#(.*)$/;

const FormatMessage: MessageFormatter = ( message, options = {} ) =>
{
	let messageObj = options as MessageObject;

	if( typeof message === "object" )
	{

		messageObj = message;
		message = messageObj.id;
	}

	const processed: RegExpMatchArray | null = regexp[ Symbol.match ]( message );
	if( processed )
	{
		const id = +processed[ 1 ];

		if( id > 0 )
		{
			//Return found translation
			return get( t )( processed[ 1 ], messageObj );
		}
		else
		{
			//Return default
			Log.Dbg( `Missing translation ID on text: ${ message }` );
			try
			{
				return getMessageFormatter( processed[ 2 ], get( locale ) ?? undefined )
					.format( messageObj.values ) as string;
			}
			catch( e )
			{
				Log.Err( e );
				return processed[ 2 ];
			}
		}
	}

	Log.Err( `Translation message in wrong #0# format: ${ message }` );
	return get( t )( message, messageObj );
};

export type MessageFormatter = ( id: string | MessageObject,
	options?: Omit<MessageObject, "id"> ) => string;

export interface MessageObject
{
	id: string;
	locale?: string;
	format?: string;
	default?: string;
	values?: InterpolationValues;
}

export type InterpolationValues =
	| Record<string, string | number | boolean | Date | FormatXMLElementFn<unknown> | null | undefined>
	| undefined;
