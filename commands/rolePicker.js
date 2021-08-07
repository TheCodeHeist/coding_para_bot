const { prog_langs, dev_types } = require("./roleConfig.json");

module.exports = {
  name: "rolePicker",
  type: "utility",
  description: "Lets user pick a role in the server.",
  execute(message, disbut) {
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

    // Send the menu to the user
    message.channel.send("**Ok then, pick a role!**", roleSelectMenu);

    // Assign the callback to the menu
    roleSelectMenu.on("select", (option) => {});
  },
};
