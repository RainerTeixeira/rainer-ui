// tsup.config.cjs
var { defineConfig } = require("tsup");
var { readdirSync, statSync } = require("fs");
var { join } = require("path");
var { execSync } = require("child_process");
function getEntryPoints(dir, base = "") {
  const entries = {};
  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = join(dir, item);
    const relativePath = base ? `${base}/${item}` : item;
    if (statSync(fullPath).isDirectory()) {
      Object.assign(entries, getEntryPoints(fullPath, relativePath));
    } else if (item.endsWith(".ts") || item.endsWith(".tsx")) {
      const name = relativePath.replace(/\.(ts|tsx)$/, "");
      entries[name] = fullPath;
    }
  }
  return entries;
}
var libEntries = getEntryPoints("src/lib", "lib");
var hooksEntries = getEntryPoints("src/hooks", "hooks");
var componentsEntries = getEntryPoints("src/components", "components");
module.exports = defineConfig({
  entry: {
    index: "src/index.ts",
    ...libEntries,
    ...hooksEntries,
    ...componentsEntries
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  splitting: false,
  bundle: true,
  treeshake: true,
  external: [
    "react-hook-form",
    "react",
    "react-dom",
    "next-themes",
    "next/link",
    "next",
    "framer-motion",
    "date-fns",
    "react-day-picker",
    "qrcode.react",
    "sonner",
    "cmdk",
    "embla-carousel-react",
    "react-loading-indicators",
    "@rainersoft/utils",
    "@radix-ui/react-avatar",
    "@radix-ui/react-separator",
    "@radix-ui/react-progress",
    "@radix-ui/react-accordion",
    "@radix-ui/react-alert-dialog",
    "@radix-ui/react-aspect-ratio",
    "@radix-ui/react-checkbox",
    "@radix-ui/react-collapsible",
    "@radix-ui/react-context-menu",
    "@radix-ui/react-dialog",
    "@radix-ui/react-dropdown-menu",
    "@radix-ui/react-hover-card",
    "@radix-ui/react-label",
    "@radix-ui/react-navigation-menu",
    "@radix-ui/react-popover",
    "@radix-ui/react-radio-group",
    "@radix-ui/react-scroll-area",
    "@radix-ui/react-select",
    "@radix-ui/react-slider",
    "@radix-ui/react-slot",
    "@radix-ui/react-switch",
    "@radix-ui/react-tabs",
    "@radix-ui/react-toggle",
    "@radix-ui/react-tooltip",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    "lucide-react"
  ],
  target: "es2020",
  outDir: "dist",
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"'
    };
    options.alias = {
      "@rainersoft/design-tokens": "../../../rainer-design-tokens"
    };
    options.logOverride = {
      "ignored-directive": "silent",
      "import-is-undefined": "silent"
    };
    options.logLevel = "error";
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcuY2pzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXERlc2Vudm9sdmltZW50b1xcXFxyYWluZXItdWlcXFxcdHN1cC5jb25maWcuY2pzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXERlc2Vudm9sdmltZW50b1xcXFxyYWluZXItdWlcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0M6L0Rlc2Vudm9sdmltZW50by9yYWluZXItdWkvdHN1cC5jb25maWcuY2pzXCI7Y29uc3QgeyBkZWZpbmVDb25maWcgfSA9IHJlcXVpcmUoJ3RzdXAnKTtcclxuY29uc3QgeyByZWFkZGlyU3luYywgc3RhdFN5bmMgfSA9IHJlcXVpcmUoJ2ZzJyk7XHJcbmNvbnN0IHsgam9pbiB9ID0gcmVxdWlyZSgncGF0aCcpO1xyXG5jb25zdCB7IGV4ZWNTeW5jIH0gPSByZXF1aXJlKCdjaGlsZF9wcm9jZXNzJyk7XHJcblxyXG4vLyAvLyBFeGVjdXRhciB2YWxpZGFcdTAwRTdcdTAwRTNvIGRlIGRlc2lnbiB0b2tlbnMgYW50ZXMgZG8gYnVpbGRcclxuLy8gdHJ5IHtcclxuLy8gICBleGVjU3luYygnbm9kZSBzY3JpcHRzL3ZhbGlkYXRlLWRlc2lnbi10b2tlbnMuanMnLCB7IFxyXG4vLyAgICAgc3RkaW86ICdpbmhlcml0JyxcclxuLy8gICAgIGN3ZDogX19kaXJuYW1lIFxyXG4vLyAgIH0pO1xyXG4vLyB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgIGNvbnNvbGUuZXJyb3IoJyBWYWxpZGFcdTAwRTdcdTAwRTNvIGRlIGRlc2lnbiB0b2tlbnMgZmFsaG91Jyk7XHJcbi8vICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4vLyB9XHJcblxyXG4vLyBGdW5cdTAwRTdcdTAwRTNvIHBhcmEgb2J0ZXIgdG9kb3Mgb3MgYXJxdWl2b3MgZGUgdW0gZGlyZXRcdTAwRjNyaW8gcmVjdXJzaXZhbWVudGVcclxuZnVuY3Rpb24gZ2V0RW50cnlQb2ludHMoZGlyLCBiYXNlID0gJycpIHtcclxuICBjb25zdCBlbnRyaWVzID0ge307XHJcbiAgY29uc3QgaXRlbXMgPSByZWFkZGlyU3luYyhkaXIpO1xyXG4gIFxyXG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgY29uc3QgZnVsbFBhdGggPSBqb2luKGRpciwgaXRlbSk7XHJcbiAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBiYXNlID8gYCR7YmFzZX0vJHtpdGVtfWAgOiBpdGVtO1xyXG4gICAgXHJcbiAgICBpZiAoc3RhdFN5bmMoZnVsbFBhdGgpLmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbihlbnRyaWVzLCBnZXRFbnRyeVBvaW50cyhmdWxsUGF0aCwgcmVsYXRpdmVQYXRoKSk7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZW5kc1dpdGgoJy50cycpIHx8IGl0ZW0uZW5kc1dpdGgoJy50c3gnKSkge1xyXG4gICAgICBjb25zdCBuYW1lID0gcmVsYXRpdmVQYXRoLnJlcGxhY2UoL1xcLih0c3x0c3gpJC8sICcnKTtcclxuICAgICAgZW50cmllc1tuYW1lXSA9IGZ1bGxQYXRoO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gZW50cmllcztcclxufVxyXG5cclxuLy8gR2VyYXIgZW50cnkgcG9pbnRzIHBhcmEgbGliLCBob29rcyBlIGNvbXBvbmVudHNcclxuY29uc3QgbGliRW50cmllcyA9IGdldEVudHJ5UG9pbnRzKCdzcmMvbGliJywgJ2xpYicpO1xyXG5jb25zdCBob29rc0VudHJpZXMgPSBnZXRFbnRyeVBvaW50cygnc3JjL2hvb2tzJywgJ2hvb2tzJyk7XHJcbmNvbnN0IGNvbXBvbmVudHNFbnRyaWVzID0gZ2V0RW50cnlQb2ludHMoJ3NyYy9jb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lQ29uZmlnKHtcclxuICBlbnRyeToge1xyXG4gICAgaW5kZXg6ICdzcmMvaW5kZXgudHMnLFxyXG4gICAgLi4ubGliRW50cmllcyxcclxuICAgIC4uLmhvb2tzRW50cmllcyxcclxuICAgIC4uLmNvbXBvbmVudHNFbnRyaWVzLFxyXG4gIH0sXHJcbiAgZm9ybWF0OiBbJ2VzbScsICdjanMnXSxcclxuICBkdHM6IHRydWUsXHJcbiAgc291cmNlbWFwOiB0cnVlLFxyXG4gIGNsZWFuOiB0cnVlLFxyXG4gIG1pbmlmeTogZmFsc2UsXHJcbiAgc3BsaXR0aW5nOiBmYWxzZSxcclxuICBidW5kbGU6IHRydWUsXHJcbiAgdHJlZXNoYWtlOiB0cnVlLFxyXG4gIGV4dGVybmFsOiBbXHJcbiAgICAncmVhY3QtaG9vay1mb3JtJyxcclxuICAgICdyZWFjdCcsIFxyXG4gICAgJ3JlYWN0LWRvbScsXHJcbiAgICAnbmV4dC10aGVtZXMnLFxyXG4gICAgJ25leHQvbGluaycsXHJcbiAgICAnbmV4dCcsXHJcbiAgICAnZnJhbWVyLW1vdGlvbicsXHJcbiAgICAnZGF0ZS1mbnMnLFxyXG4gICAgJ3JlYWN0LWRheS1waWNrZXInLFxyXG4gICAgJ3FyY29kZS5yZWFjdCcsXHJcbiAgICAnc29ubmVyJyxcclxuICAgICdjbWRrJyxcclxuICAgICdlbWJsYS1jYXJvdXNlbC1yZWFjdCcsXHJcbiAgICAncmVhY3QtbG9hZGluZy1pbmRpY2F0b3JzJyxcclxuICAgICdAcmFpbmVyc29mdC91dGlscycsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWF2YXRhcicsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXNlcGFyYXRvcicsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXByb2dyZXNzJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtYWxlcnQtZGlhbG9nJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtYXNwZWN0LXJhdGlvJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3gnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1jb2xsYXBzaWJsZScsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQtbWVudScsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnUnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtbGFiZWwnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1uYXZpZ2F0aW9uLW1lbnUnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1wb3BvdmVyJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtcmFkaW8tZ3JvdXAnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYScsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXNlbGVjdCcsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXNsaWRlcicsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXNsb3QnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zd2l0Y2gnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC10YWJzJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtdG9vbHRpcCcsXHJcbiAgICAnY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JyxcclxuICAgICdjbHN4JyxcclxuICAgICd0YWlsd2luZC1tZXJnZScsXHJcbiAgICAnbHVjaWRlLXJlYWN0JyxcclxuICBdLFxyXG4gIHRhcmdldDogJ2VzMjAyMCcsXHJcbiAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgZXNidWlsZE9wdGlvbnMob3B0aW9ucykge1xyXG4gICAgb3B0aW9ucy5iYW5uZXIgPSB7XHJcbiAgICAgIGpzOiAnXCJ1c2UgY2xpZW50XCInLFxyXG4gICAgfTtcclxuICAgIC8vIENvbmZpZ3VyYXIgYWxpYXNlcyBwYXJhIHJlc29sdVx1MDBFN1x1MDBFM28gZGUgcGF0aHNcclxuICAgIG9wdGlvbnMuYWxpYXMgPSB7XHJcbiAgICAgICdAcmFpbmVyc29mdC9kZXNpZ24tdG9rZW5zJzogJy4uLy4uLy4uL3JhaW5lci1kZXNpZ24tdG9rZW5zJyxcclxuICAgIH07XHJcbiAgICAvLyBTaWxlbmNpYSBhdmlzb3MgXCJ1c2UgY2xpZW50XCIgaWdub3JhZG9zIGFvIGZhemVyIGJ1bmRsZVxyXG4gICAgb3B0aW9ucy5sb2dPdmVycmlkZSA9IHtcclxuICAgICAgJ2lnbm9yZWQtZGlyZWN0aXZlJzogJ3NpbGVudCcsXHJcbiAgICAgICdpbXBvcnQtaXMtdW5kZWZpbmVkJzogJ3NpbGVudCcsXHJcbiAgICB9O1xyXG4gICAgb3B0aW9ucy5sb2dMZXZlbCA9ICdlcnJvcic7XHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBME8sSUFBTSxFQUFFLGFBQWEsSUFBSSxRQUFRLE1BQU07QUFDalIsSUFBTSxFQUFFLGFBQWEsU0FBUyxJQUFJLFFBQVEsSUFBSTtBQUM5QyxJQUFNLEVBQUUsS0FBSyxJQUFJLFFBQVEsTUFBTTtBQUMvQixJQUFNLEVBQUUsU0FBUyxJQUFJLFFBQVEsZUFBZTtBQWM1QyxTQUFTLGVBQWUsS0FBSyxPQUFPLElBQUk7QUFDdEMsUUFBTSxVQUFVLENBQUM7QUFDakIsUUFBTSxRQUFRLFlBQVksR0FBRztBQUU3QixhQUFXLFFBQVEsT0FBTztBQUN4QixVQUFNLFdBQVcsS0FBSyxLQUFLLElBQUk7QUFDL0IsVUFBTSxlQUFlLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLO0FBRWhELFFBQUksU0FBUyxRQUFRLEVBQUUsWUFBWSxHQUFHO0FBQ3BDLGFBQU8sT0FBTyxTQUFTLGVBQWUsVUFBVSxZQUFZLENBQUM7QUFBQSxJQUMvRCxXQUFXLEtBQUssU0FBUyxLQUFLLEtBQUssS0FBSyxTQUFTLE1BQU0sR0FBRztBQUN4RCxZQUFNLE9BQU8sYUFBYSxRQUFRLGVBQWUsRUFBRTtBQUNuRCxjQUFRLElBQUksSUFBSTtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUVBLFNBQU87QUFDVDtBQUdBLElBQU0sYUFBYSxlQUFlLFdBQVcsS0FBSztBQUNsRCxJQUFNLGVBQWUsZUFBZSxhQUFhLE9BQU87QUFDeEQsSUFBTSxvQkFBb0IsZUFBZSxrQkFBa0IsWUFBWTtBQUV2RSxPQUFPLFVBQVUsYUFBYTtBQUFBLEVBQzVCLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxFQUNMO0FBQUEsRUFDQSxRQUFRLENBQUMsT0FBTyxLQUFLO0FBQUEsRUFDckIsS0FBSztBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixlQUFlLFNBQVM7QUFDdEIsWUFBUSxTQUFTO0FBQUEsTUFDZixJQUFJO0FBQUEsSUFDTjtBQUVBLFlBQVEsUUFBUTtBQUFBLE1BQ2QsNkJBQTZCO0FBQUEsSUFDL0I7QUFFQSxZQUFRLGNBQWM7QUFBQSxNQUNwQixxQkFBcUI7QUFBQSxNQUNyQix1QkFBdUI7QUFBQSxJQUN6QjtBQUNBLFlBQVEsV0FBVztBQUFBLEVBQ3JCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
