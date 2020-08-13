# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/28fce08.tar.gz";
      sha256 = "1pzmqgby1g9ypdn6wgxmbhp6hr55dhhrccn67knrpy93vib9wf8r";
    }
  ) { };
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
