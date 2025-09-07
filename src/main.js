#!/usr/bin/env node

import pkg from "../package.json" with { type: "json" }
import { Command, program } from "commander"
import * as prompt from "@clack/prompts"
import color from "picocolors"

const create = new Command("create")
    .alias("creator")
    .description("Template Creator")
    .action(async () => {
        console.log()
        prompt.intro(color.inverse("PokeFred-Templater (Creator)"))
        prompt.log.warn("feature currently isn't implemented")
        prompt.outro("You're all set!")
    })

const clean = new Command("clean")
    .alias("cleaner")
    .description("Template Cleaner")
    .action(async () => {
        console.log()
        prompt.intro(color.inverse("PokeFred-Templater (Cleaner)"))
        prompt.log.warn("feature currently isn't implemented")
        prompt.outro("You're all set!")
    })

program
    .name(pkg.name)
    .version(pkg.version, "-v, --version")
    .helpCommand(true)
    .addCommand(create)
    .addCommand(clean)
    .parse()
