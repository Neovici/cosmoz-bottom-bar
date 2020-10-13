# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/41c0f4968100.tar.gz";
      sha256 = "0ahi76lb38fcnbzl40k53yjr5vcc75kqg0ddcw6bbc6ckz0z27kg";
    }
  )
{ };
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
