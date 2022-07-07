import App from "./App.svelte";
import "./Utils/Translator";

import "@unocss/reset/normalize.css";
import "uno.css";
import "~/Assets/Global.css";

Log.Dbg( "APP START" );
const app = new App( {
	target: document.getElementById( "app" ) as Element,
} );

// Dynamic themes started, remove static background
document.documentElement.style.backgroundColor = "";

export default app;
