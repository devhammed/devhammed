#!/usr/bin/env node

'use strict'

const open = require('open')
const boxen = require('boxen')
const chalk = require('chalk')
const clear = require('clear')
const inquirer = require('inquirer')

// Clear the stage...
clear()

// Setup some things...
const username = 'devhammed'

// Print the Card...
console.log(
  boxen(
    [
      chalk.bold.green(`        Hammed Oyedele (@${username})`),

      '',

      `${chalk.white.bold('       Work:')}  ${chalk.white(
        'Chief Technology Officer'
      )} ${chalk.italic.gray('@')} ${chalk.hex('#2b82b2').bold('Epower.ng')}`,

      `${chalk.white.bold('       Blog:')}  ${chalk.gray(
        'https://dev.to/'
      )}${chalk.whiteBright(username)}`,

      `${chalk.white.bold('    Twitter:')}  ${chalk.gray(
        'https://twitter.com/'
      )}${chalk.cyan(username)}`,

      `${chalk.white.bold('     GitHub:')}  ${chalk.gray(
        'https://github.com/'
      )}${chalk.green(username)}`,

      `${chalk.white.bold('   LinkedIn:')}  ${chalk.gray(
        'https://linkedin.com/in/'
      )}${chalk.blue(username)}`,

      `${chalk.white.bold('        Web:')}  ${chalk.cyan(
        `https://${username}.github.io`
      )}`,

      `${chalk.white.bold('       Card:')}  ${chalk.red('npx')} ${chalk.white(
        username
      )}`,

      '',

      chalk.italic('I am a Software Developer that develops'),

      chalk.italic('intuitive Web and Mobile applications'),

      chalk.italic('that helps businesses connect with'),

      chalk.italic('their target audience through the internet.')
    ].join('\n'),
    {
      margin: 1,
      padding: 1,
      float: 'center',
      borderColor: 'green',
      borderStyle: 'double'
    }
  )
)

// CTA...
inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What you want to do?',
      choices: [
        {
          name: `Send me an ${chalk.green.bold('email')}?`,
          value: () => {
            open('mailto:itz.harmid@gmail.com')
            console.log('\nDone, see you soon.\n')
          }
        },
        {
          name: 'Just quit.',
          value: () => console.log('Good Bye!\n')
        }
      ]
    }
  ])
  .then(answer => answer.action())
