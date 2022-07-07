export class AppLogger
{
	/* eslint-disable @typescript-eslint/no-explicit-any */

	/* eslint-disable @typescript-eslint/no-unsafe-argument */

	Err( ...data: any[] )
	{
		console.error( ...data );
	}

	Wrn( ...data: any[] )
	{
		console.warn( ...data );
	}

	Log( ...data: any[] )
	{
		console.log( ...data );
	}

	Inf( ...data: any[] )
	{
		console.info( ...data );
	}

	Dbg( ...data: any[] )
	{
		console.debug( ...data );
	}

	/* eslint-enable @typescript-eslint/no-explicit-any */
	/* eslint-enable @typescript-eslint/no-unsafe-argument */
}

export const Log = new AppLogger();