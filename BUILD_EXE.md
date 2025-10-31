# Building macOS Executable

This project can be packaged as a standalone macOS executable that includes a web server and all static files.

## Prerequisites

Install the `pkg` dependency:
```bash
yarn install
```

## Building the Executable

### Build for both Intel and Apple Silicon:
```bash
yarn package
```

This creates two executables in the `dist/` directory:
- `hawks-landing-macos-x64` (Intel Macs)
- `hawks-landing-macos-arm64` (Apple Silicon M1/M2/M3)

### Build for specific architecture:

Intel only:
```bash
yarn package:intel
```

Apple Silicon only:
```bash
yarn package:arm
```

## Running the Executable

After building, run the appropriate executable:

```bash
# Intel Mac
./dist/hawks-landing-macos-x64

# Apple Silicon Mac
./dist/hawks-landing-macos-arm64
```

The server will start on `http://localhost:3000` by default.

To use a different port:
```bash
PORT=8080 ./dist/hawks-landing-macos-arm64
```

## How It Works

1. The build process exports your Next.js site as static files to the `out/` directory
2. `pkg` bundles Node.js, the static files, and the `server.js` HTTP server into a single executable
3. The executable can be distributed and run on any macOS machine without requiring Node.js to be installed

## Distribution

The executables in `dist/` are self-contained and can be:
- Copied to other machines
- Distributed to users
- Run without any dependencies (no Node.js installation needed)

Note: macOS may require users to right-click and select "Open" the first time to bypass Gatekeeper security.

