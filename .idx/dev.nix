# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.sqlite
  ];
  # Sets environment variables in the workspace
  env = { 
    HOST="0.0.0.0";
  };
  idx = let
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [ ];
  in {
    inherit extensions;
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        install-deps =
          "npm ci --prefer-offline --no-audit --no-progress || npm i --no-audit --no-progress";
        # Open editors for the following files by default, if they exist:
        default.openFiles = [ "README.md" ];
      };
      # To run something each time the workspace is (re)started, use the `onStart` hook
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command =
            [ "npm" "start" "$PORT"];
          manager = "web";
        };
      };
    };
  };
}
