// tsup.config.ts
import { defineConfig } from "tsup";
import { readdirSync, statSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
var __injected_dirname__ = "C:\\Desenvolvimento\\rainer-ui";
try {
  execSync("node scripts/validate-design-tokens.js", {
    stdio: "inherit",
    cwd: __injected_dirname__
  });
} catch (error) {
  console.error("\u274C Valida\xE7\xE3o de design tokens falhou");
  process.exit(1);
}
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
var tsup_config_default = defineConfig({
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
    "@rainersoft/design-tokens",
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
    options.logOverride = {
      "ignored-directive": "silent",
      "import-is-undefined": "silent"
    };
    options.logLevel = "error";
  }
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiQzpcXFxcRGVzZW52b2x2aW1lbnRvXFxcXHJhaW5lci11aVxcXFx0c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJDOlxcXFxEZXNlbnZvbHZpbWVudG9cXFxccmFpbmVyLXVpXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9DOi9EZXNlbnZvbHZpbWVudG8vcmFpbmVyLXVpL3RzdXAuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndHN1cCc7XHJcbmltcG9ydCB7IHJlYWRkaXJTeW5jLCBzdGF0U3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBleGVjU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xyXG5cclxuLy8gRXhlY3V0YXIgdmFsaWRhXHUwMEU3XHUwMEUzbyBkZSBkZXNpZ24gdG9rZW5zIGFudGVzIGRvIGJ1aWxkXHJcbnRyeSB7XHJcbiAgZXhlY1N5bmMoJ25vZGUgc2NyaXB0cy92YWxpZGF0ZS1kZXNpZ24tdG9rZW5zLmpzJywgeyBcclxuICAgIHN0ZGlvOiAnaW5oZXJpdCcsXHJcbiAgICBjd2Q6IF9fZGlybmFtZSBcclxuICB9KTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuICBjb25zb2xlLmVycm9yKCdcdTI3NEMgVmFsaWRhXHUwMEU3XHUwMEUzbyBkZSBkZXNpZ24gdG9rZW5zIGZhbGhvdScpO1xyXG4gIHByb2Nlc3MuZXhpdCgxKTtcclxufVxyXG5cclxuLy8gRnVuXHUwMEU3XHUwMEUzbyBwYXJhIG9idGVyIHRvZG9zIG9zIGFycXVpdm9zIGRlIHVtIGRpcmV0XHUwMEYzcmlvIHJlY3Vyc2l2YW1lbnRlXHJcbmZ1bmN0aW9uIGdldEVudHJ5UG9pbnRzKGRpcjogc3RyaW5nLCBiYXNlID0gJycpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcclxuICBjb25zdCBlbnRyaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcbiAgY29uc3QgaXRlbXMgPSByZWFkZGlyU3luYyhkaXIpO1xyXG4gIFxyXG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgY29uc3QgZnVsbFBhdGggPSBqb2luKGRpciwgaXRlbSk7XHJcbiAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBiYXNlID8gYCR7YmFzZX0vJHtpdGVtfWAgOiBpdGVtO1xyXG4gICAgXHJcbiAgICBpZiAoc3RhdFN5bmMoZnVsbFBhdGgpLmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbihlbnRyaWVzLCBnZXRFbnRyeVBvaW50cyhmdWxsUGF0aCwgcmVsYXRpdmVQYXRoKSk7XHJcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZW5kc1dpdGgoJy50cycpIHx8IGl0ZW0uZW5kc1dpdGgoJy50c3gnKSkge1xyXG4gICAgICBjb25zdCBuYW1lID0gcmVsYXRpdmVQYXRoLnJlcGxhY2UoL1xcLih0c3x0c3gpJC8sICcnKTtcclxuICAgICAgZW50cmllc1tuYW1lXSA9IGZ1bGxQYXRoO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gZW50cmllcztcclxufVxyXG5cclxuLy8gR2VyYXIgZW50cnkgcG9pbnRzIHBhcmEgbGliLCBob29rcyBlIGNvbXBvbmVudHNcclxuY29uc3QgbGliRW50cmllcyA9IGdldEVudHJ5UG9pbnRzKCdzcmMvbGliJywgJ2xpYicpO1xyXG5jb25zdCBob29rc0VudHJpZXMgPSBnZXRFbnRyeVBvaW50cygnc3JjL2hvb2tzJywgJ2hvb2tzJyk7XHJcbmNvbnN0IGNvbXBvbmVudHNFbnRyaWVzID0gZ2V0RW50cnlQb2ludHMoJ3NyYy9jb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgZW50cnk6IHtcclxuICAgIGluZGV4OiAnc3JjL2luZGV4LnRzJyxcclxuICAgIC4uLmxpYkVudHJpZXMsXHJcbiAgICAuLi5ob29rc0VudHJpZXMsXHJcbiAgICAuLi5jb21wb25lbnRzRW50cmllcyxcclxuICB9LFxyXG4gIGZvcm1hdDogWydlc20nLCAnY2pzJ10sXHJcbiAgZHRzOiB0cnVlLFxyXG4gIHNvdXJjZW1hcDogdHJ1ZSxcclxuICBjbGVhbjogdHJ1ZSxcclxuICBtaW5pZnk6IGZhbHNlLFxyXG4gIHNwbGl0dGluZzogZmFsc2UsXHJcbiAgYnVuZGxlOiB0cnVlLFxyXG4gIHRyZWVzaGFrZTogdHJ1ZSxcclxuICBleHRlcm5hbDogW1xyXG4gICAgJ3JlYWN0LWhvb2stZm9ybScsXHJcbiAgICAncmVhY3QnLCBcclxuICAgICdyZWFjdC1kb20nLFxyXG4gICAgJ25leHQtdGhlbWVzJyxcclxuICAgICduZXh0L2xpbmsnLFxyXG4gICAgJ25leHQnLFxyXG4gICAgJ2ZyYW1lci1tb3Rpb24nLFxyXG4gICAgJ2RhdGUtZm5zJyxcclxuICAgICdyZWFjdC1kYXktcGlja2VyJyxcclxuICAgICdxcmNvZGUucmVhY3QnLFxyXG4gICAgJ3Nvbm5lcicsXHJcbiAgICAnY21kaycsXHJcbiAgICAnZW1ibGEtY2Fyb3VzZWwtcmVhY3QnLFxyXG4gICAgJ3JlYWN0LWxvYWRpbmctaW5kaWNhdG9ycycsXHJcbiAgICAnQHJhaW5lcnNvZnQvZGVzaWduLXRva2VucycsXHJcbiAgICAnQHJhaW5lcnNvZnQvdXRpbHMnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1hdmF0YXInLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3InLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1wcm9ncmVzcycsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvbicsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWFsZXJ0LWRpYWxvZycsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWFzcGVjdC1yYXRpbycsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWNoZWNrYm94JyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtY29sbGFwc2libGUnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1jb250ZXh0LW1lbnUnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1kaWFsb2cnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51JyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtaG92ZXItY2FyZCcsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWxhYmVsJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtbmF2aWdhdGlvbi1tZW51JyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlcicsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXJhZGlvLWdyb3VwJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3Qtc2Nyb2xsLWFyZWEnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zZWxlY3QnLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zbGlkZXInLFxyXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zbG90JyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3Qtc3dpdGNoJyxcclxuICAgICdAcmFkaXgtdWkvcmVhY3QtdGFicycsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXRvZ2dsZScsXHJcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXAnLFxyXG4gICAgJ2NsYXNzLXZhcmlhbmNlLWF1dGhvcml0eScsXHJcbiAgICAnY2xzeCcsXHJcbiAgICAndGFpbHdpbmQtbWVyZ2UnLFxyXG4gICAgJ2x1Y2lkZS1yZWFjdCcsXHJcbiAgXSxcclxuICB0YXJnZXQ6ICdlczIwMjAnLFxyXG4gIG91dERpcjogJ2Rpc3QnLFxyXG4gIGVzYnVpbGRPcHRpb25zKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMuYmFubmVyID0ge1xyXG4gICAgICBqczogJ1widXNlIGNsaWVudFwiJyxcclxuICAgIH07XHJcbiAgICAvLyBTaWxlbmNpYSBhdmlzb3MgXCJ1c2UgY2xpZW50XCIgaWdub3JhZG9zIGFvIGZhemVyIGJ1bmRsZVxyXG4gICAgb3B0aW9ucy5sb2dPdmVycmlkZSA9IHtcclxuICAgICAgJ2lnbm9yZWQtZGlyZWN0aXZlJzogJ3NpbGVudCcsXHJcbiAgICAgICdpbXBvcnQtaXMtdW5kZWZpbmVkJzogJ3NpbGVudCcsXHJcbiAgICB9O1xyXG4gICAgb3B0aW9ucy5sb2dMZXZlbCA9ICdlcnJvcic7XHJcbiAgfSxcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF3TyxTQUFTLG9CQUFvQjtBQUNyUSxTQUFTLGFBQWEsZ0JBQWdCO0FBQ3RDLFNBQVMsWUFBWTtBQUNyQixTQUFTLGdCQUFnQjtBQUhzRCxJQUFNLHVCQUF1QjtBQU01RyxJQUFJO0FBQ0YsV0FBUywwQ0FBMEM7QUFBQSxJQUNqRCxPQUFPO0FBQUEsSUFDUCxLQUFLO0FBQUEsRUFDUCxDQUFDO0FBQ0gsU0FBUyxPQUFPO0FBQ2QsVUFBUSxNQUFNLGdEQUFxQztBQUNuRCxVQUFRLEtBQUssQ0FBQztBQUNoQjtBQUdBLFNBQVMsZUFBZSxLQUFhLE9BQU8sSUFBNEI7QUFDdEUsUUFBTSxVQUFrQyxDQUFDO0FBQ3pDLFFBQU0sUUFBUSxZQUFZLEdBQUc7QUFFN0IsYUFBVyxRQUFRLE9BQU87QUFDeEIsVUFBTSxXQUFXLEtBQUssS0FBSyxJQUFJO0FBQy9CLFVBQU0sZUFBZSxPQUFPLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSztBQUVoRCxRQUFJLFNBQVMsUUFBUSxFQUFFLFlBQVksR0FBRztBQUNwQyxhQUFPLE9BQU8sU0FBUyxlQUFlLFVBQVUsWUFBWSxDQUFDO0FBQUEsSUFDL0QsV0FBVyxLQUFLLFNBQVMsS0FBSyxLQUFLLEtBQUssU0FBUyxNQUFNLEdBQUc7QUFDeEQsWUFBTSxPQUFPLGFBQWEsUUFBUSxlQUFlLEVBQUU7QUFDbkQsY0FBUSxJQUFJLElBQUk7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFFQSxTQUFPO0FBQ1Q7QUFHQSxJQUFNLGFBQWEsZUFBZSxXQUFXLEtBQUs7QUFDbEQsSUFBTSxlQUFlLGVBQWUsYUFBYSxPQUFPO0FBQ3hELElBQU0sb0JBQW9CLGVBQWUsa0JBQWtCLFlBQVk7QUFFdkUsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLEVBQ0w7QUFBQSxFQUNBLFFBQVEsQ0FBQyxPQUFPLEtBQUs7QUFBQSxFQUNyQixLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixlQUFlLFNBQVM7QUFDdEIsWUFBUSxTQUFTO0FBQUEsTUFDZixJQUFJO0FBQUEsSUFDTjtBQUVBLFlBQVEsY0FBYztBQUFBLE1BQ3BCLHFCQUFxQjtBQUFBLE1BQ3JCLHVCQUF1QjtBQUFBLElBQ3pCO0FBQ0EsWUFBUSxXQUFXO0FBQUEsRUFDckI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
