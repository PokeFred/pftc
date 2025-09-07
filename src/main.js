#!/usr/bin/env node

import pkg from "../package.json" with { type: "json" }
import { cpSync, renameSync } from "node:fs"
import { join as joinPath } from "node:path"
import { Command, program } from "commander"
import * as prompt from "@clack/prompts"
import color from "picocolors"

const create = new Command("create")
    .alias("creator")
    .description("Template Creator")
    .action(async () => {
        console.log()
        prompt.intro("PokeFred-Templater (Creator)")
        prompt.log.warn("feature currently isn't implemented")
        prompt.outro("You're all set!")
    })

const clean = new Command("clean")
    .alias("cleaner")
    .description("Template Cleaner")
    .action(async () => {
        console.log()
        prompt.intro("PokeFred-Templater (Cleaner)")
        prompt.log.warn("feature currently isn't implemented")
        prompt.outro("You're all set!")
    })

const temp = new Command("temp")
    .description("Template Creator (Temp)")
    .action(async () => {
        console.log()
        prompt.intro("PokeFred-Templater (Creator)")

        let name = null
        try {
            name = await prompt.text({
                message: "Project Name:"
            })
        } catch (error) {
            name = null
            return
        }
        cpSync(joinPath(process.cwd(), "temp"), joinPath(process.cwd(), name), { recursive: true })
        prompt.log.info("Next Steps:")
        prompt.log.message(`$ cd ${name}\n$ npm i\n$ npm run dev`)
        prompt.outro("You're all set!")
    })

program
    .name(pkg.name)
    .version(pkg.version, "-v, --version")
    .helpCommand(true)
    .addCommand(create)
    .addCommand(clean)
    .addCommand(temp)
    .parse()
