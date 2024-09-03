exports.activate = function() {
  console.log(`Activating ${nova.extension.identifier}`);
}
exports.deactivate = function() {
//
}

nova.commands.register("indentFishScript", (editor) => {
  const fish_indent_path = nova.config.get("net.honeypot.Fish.fish_indent_path");

  var process = new Process(fish_indent_path, {
    args: ["--write", editor.document.path]
  });

  process.start();
});
