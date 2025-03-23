module Partas.Solid.GithubActions.App

open Partas.Solid
open Fable.Core
open Fable.Core.JsInterop

[<Erase>]
type App() =
    inherit div()
    [<SolidTypeComponentAttribute>]
    member props.constructor =
        div() {
            "Sample Text"
        }