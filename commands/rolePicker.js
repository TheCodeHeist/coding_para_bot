const { prog_langs, dev_types } = require("./roleConfig.json");

module.exports = {
  name: "rolePicker",
  type: "utility",
  description: "Lets user pick a role in the server.",
  execute(bot, message, disbut) {
    // Menu options
    const cppOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.c_cpp.label)
      .setValue(prog_langs.c_cpp.id);

    const javaOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.java.label)
      .setValue(prog_langs.java.id);

    const pythonOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.python.label)
      .setValue(prog_langs.python.id);

    const phpOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.php.label)
      .setValue(prog_langs.php.id);

    const jsOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.javascript.label)
      .setValue(prog_langs.javascript.id);

    const rbOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.ruby.label)
      .setValue(prog_langs.ruby.id);

    const csOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.csharp.label)
      .setValue(prog_langs.csharp.id);

    const dartOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.dart.label)
      .setValue(prog_langs.dart.id);

    const rustOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.rust.label)
      .setValue(prog_langs.rust.id);

    const luaOpt = new disbut.MessageMenuOption()
      .setLabel(prog_langs.lua.label)
      .setValue(prog_langs.lua.id);

    const appOpt = new disbut.MessageMenuOption()
      .setLabel(dev_types.app_dev.label)
      .setValue(dev_types.app_dev.id);

    const webOpt = new disbut.MessageMenuOption()
      .setLabel(dev_types.web_dev.label)
      .setValue(dev_types.web_dev.id);

    const gameOpt = new disbut.MessageMenuOption()
      .setLabel(dev_types.game_dev.label)
      .setValue(dev_types.game_dev.id);

    const compOpt = new disbut.MessageMenuOption()
      .setLabel(dev_types.comp_prog.label)
      .setValue(dev_types.comp_prog.id);

    // Menu Selection
    let roleSelectMenu = new disbut.MessageMenu()
      .setID("roleSelectMenu")
      .setPlaceholder("Select your role:")
      .setMinValues(1)
      .setMaxValues(14)
      .addOptions([
        cppOpt,
        javaOpt,
        pythonOpt,
        phpOpt,
        jsOpt,
        rbOpt,
        csOpt,
        dartOpt,
        rustOpt,
        luaOpt,
        appOpt,
        webOpt,
        gameOpt,
        compOpt,
      ]);

    let menuRow = new disbut.MessageActionRow()
      .addComponent(roleSelectMenu);

    // Send the menu to the user
    message.channel.send("**আচ্ছা, আপনার রোল যাচাই করুন!**", {
      component: menuRow
    });

    // Assign the callback to the menu
    bot.on("clickMenu", async (menu) => {
      // const member = menu.message.guild.members.fetch({ user: menu.clicker.user.id, force: true });
      menu.message.guild.members.fetch({ user: menu.clicker.id, force: true }).then(response => {
        const member = menu.message.guild.members.cache.get(response.user.id);

        menu.values.forEach(async (x, index) => {
          if (x === "cppOption") {
            if (member.roles.cache.get(prog_langs.c_cpp.obj_id)) {
              await member.roles.remove(prog_langs.c_cpp.obj_id);
            } else if (!member.roles.cache.get(prog_langs.c_cpp.obj_id)) {
              await member.roles.add(prog_langs.c_cpp.obj_id);
            }
          }

          if (x === "pyOption") {
            if (member.roles.cache.get(prog_langs.python.obj_id)) {
              await member.roles.remove(prog_langs.python.obj_id);
            } else if (!member.roles.cache.get(prog_langs.python.obj_id)) {
              await member.roles.add(prog_langs.python.obj_id);
            }
          }

          if (x === "jsOption") {
            if (member.roles.cache.get(prog_langs.javascript.obj_id)) {
              await member.roles.remove(prog_langs.javascript.obj_id);
            } else if (!member.roles.cache.get(prog_langs.javascript.obj_id)) {
              await member.roles.add(prog_langs.javascript.obj_id);
            }
          }

          if (x === "rbOption") {
            if (member.roles.cache.get(prog_langs.ruby.obj_id)) {
              await member.roles.remove(prog_langs.ruby.obj_id);
            } else if (!member.roles.cache.get(prog_langs.ruby.obj_id)) {
              await member.roles.add(prog_langs.ruby.obj_id);
            }
          }

          if (x === "javaOption") {
            if (member.roles.cache.get(prog_langs.java.obj_id)) {
              await member.roles.remove(prog_langs.java.obj_id);
            } else if (!member.roles.cache.get(prog_langs.java.obj_id)) {
              await member.roles.add(prog_langs.java.obj_id);
            }
          }

          if (x === "phpOption") {
            if (member.roles.cache.get(prog_langs.php.obj_id)) {
              await member.roles.remove(prog_langs.php.obj_id);
            } else if (!member.roles.cache.get(prog_langs.php.obj_id)) {
              await member.roles.add(prog_langs.php.obj_id);
            }
          }

          if (x === "dartOption") {
            if (member.roles.cache.get(prog_langs.dart.obj_id)) {
              await member.roles.remove(prog_langs.dart.obj_id);
            } else if (!member.roles.cache.get(prog_langs.dart.obj_id)) {
              await member.roles.add(prog_langs.dart.obj_id);
            }
          }

          if (x === "csOption") {
            if (member.roles.cache.get(prog_langs.csharp.obj_id)) {
              await member.roles.remove(prog_langs.csharp.obj_id);
            } else if (!member.roles.cache.get(prog_langs.csharp.obj_id)) {
              await member.roles.add(prog_langs.csharp.obj_id);
            }
          }

          if (x === "rsOption") {
            if (member.roles.cache.get(prog_langs.rust.obj_id)) {
              await member.roles.remove(prog_langs.rust.obj_id);
            } else if (!member.roles.cache.get(prog_langs.rust.obj_id)) {
              await member.roles.add(prog_langs.rust.obj_id);
            }
          }

          if (x === "luaOption") {
            if (member.roles.cache.get(prog_langs.lua.obj_id)) {
              await member.roles.remove(prog_langs.lua.obj_id);
            } else if (!member.roles.cache.get(prog_langs.lua.obj_id)) {
              await member.roles.add(prog_langs.lua.obj_id);
            }
          }

          if (x === "appDevOption") {
            if (member.roles.cache.get(prog_langs.app_dev.obj_id)) {
              await member.roles.remove(prog_langs.app_dev.obj_id);
            } else if (!member.roles.cache.get(prog_langs.app_dev.obj_id)) {
              await member.roles.add(prog_langs.app_dev.obj_id);
            }
          }

          if (x === "webDevOption") {
            if (member.roles.cache.get(prog_langs.web_dev.obj_id)) {
              await member.roles.remove(prog_langs.web_dev.obj_id);
            } else if (!member.roles.cache.get(prog_langs.web_dev.obj_id)) {
              await member.roles.add(prog_langs.web_dev.obj_id);
            }
          }

          if (x === "gameDevOption") {
            if (member.roles.cache.get(prog_langs.game_dev.obj_id)) {
              await member.roles.remove(prog_langs.game_dev.obj_id);
            } else if (!member.roles.cache.get(prog_langs.game_dev.obj_id)) {
              await member.roles.add(prog_langs.game_dev.obj_id);
            }
          }

          if (x === "compProgOption") {
            if (member.roles.cache.get(prog_langs.comp_prog.obj_id)) {
              await member.roles.remove(prog_langs.comp_prog.obj_id);
            } else if (!member.roles.cache.get(prog_langs.comp_prog.obj_id)) {
              await member.roles.add(prog_langs.comp_prog.obj_id);
            }
          }
        });
      });
      
      return menu.reply.defer(true).catch(console.log);
    });
  },
};
