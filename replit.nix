{ pkgs }: {
    deps = [
        pkgs.run
        pkgs.mmh
        pkgs.yarn
        pkgs.esbuild
        pkgs.nodejs-16_x

        pkgs.nodePackages.typescript
        pkgs.nodePackages.typescript-language-server
    ];
}