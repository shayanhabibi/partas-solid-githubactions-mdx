module Partas.Solid.GithubActions

open Fable.Core
open Partas.Solid
open Fable.Core.JsInterop
open Partas.Solid.GithubActions.App

importAll "./index.css"

let Test: TagValue = import "default as TestMdx" "./TestMdx.mdx"

[<Import("MDXProvider", "solid-jsx")>]
type MDXProvider() =
    inherit RegularNode()
    [<Erase>] member val components = obj with get,set

[<SolidComponent>]
let Root () =
    MDXProvider() {
        App()
        Test % div()
    }

open Browser
    
render(Root, document.getElementById "root")
