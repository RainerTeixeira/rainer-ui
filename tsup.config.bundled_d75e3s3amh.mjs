// tsup.config.ts
import { defineConfig } from "tsup";
import { readdirSync, statSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
var __injected_dirname__ = "/home/rainer/\xC1rea de trabalho/desenvolvimento/rainer-ui";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL2hvbWUvcmFpbmVyL1x1MDBDMXJlYSBkZSB0cmFiYWxoby9kZXNlbnZvbHZpbWVudG8vcmFpbmVyLXVpL3RzdXAuY29uZmlnLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9ob21lL3JhaW5lci9cdTAwQzFyZWEgZGUgdHJhYmFsaG8vZGVzZW52b2x2aW1lbnRvL3JhaW5lci11aVwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vaG9tZS9yYWluZXIvJUMzJTgxcmVhJTIwZGUlMjB0cmFiYWxoby9kZXNlbnZvbHZpbWVudG8vcmFpbmVyLXVpL3RzdXAuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndHN1cCc7XG5pbXBvcnQgeyByZWFkZGlyU3luYywgc3RhdFN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGVjU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG4vLyBFeGVjdXRhciB2YWxpZGFcdTAwRTdcdTAwRTNvIGRlIGRlc2lnbiB0b2tlbnMgYW50ZXMgZG8gYnVpbGRcbnRyeSB7XG4gIGV4ZWNTeW5jKCdub2RlIHNjcmlwdHMvdmFsaWRhdGUtZGVzaWduLXRva2Vucy5qcycsIHsgXG4gICAgc3RkaW86ICdpbmhlcml0JyxcbiAgICBjd2Q6IF9fZGlybmFtZSBcbiAgfSk7XG59IGNhdGNoIChlcnJvcikge1xuICBjb25zb2xlLmVycm9yKCdcdTI3NEMgVmFsaWRhXHUwMEU3XHUwMEUzbyBkZSBkZXNpZ24gdG9rZW5zIGZhbGhvdScpO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59XG5cbi8vIEZ1blx1MDBFN1x1MDBFM28gcGFyYSBvYnRlciB0b2RvcyBvcyBhcnF1aXZvcyBkZSB1bSBkaXJldFx1MDBGM3JpbyByZWN1cnNpdmFtZW50ZVxuZnVuY3Rpb24gZ2V0RW50cnlQb2ludHMoZGlyOiBzdHJpbmcsIGJhc2UgPSAnJyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCBlbnRyaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGNvbnN0IGl0ZW1zID0gcmVhZGRpclN5bmMoZGlyKTtcbiAgXG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gam9pbihkaXIsIGl0ZW0pO1xuICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IGJhc2UgPyBgJHtiYXNlfS8ke2l0ZW19YCA6IGl0ZW07XG4gICAgXG4gICAgaWYgKHN0YXRTeW5jKGZ1bGxQYXRoKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVudHJpZXMsIGdldEVudHJ5UG9pbnRzKGZ1bGxQYXRoLCByZWxhdGl2ZVBhdGgpKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZW5kc1dpdGgoJy50cycpIHx8IGl0ZW0uZW5kc1dpdGgoJy50c3gnKSkge1xuICAgICAgY29uc3QgbmFtZSA9IHJlbGF0aXZlUGF0aC5yZXBsYWNlKC9cXC4odHN8dHN4KSQvLCAnJyk7XG4gICAgICBlbnRyaWVzW25hbWVdID0gZnVsbFBhdGg7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZW50cmllcztcbn1cblxuLy8gR2VyYXIgZW50cnkgcG9pbnRzIHBhcmEgbGliLCBob29rcyBlIGNvbXBvbmVudHNcbmNvbnN0IGxpYkVudHJpZXMgPSBnZXRFbnRyeVBvaW50cygnc3JjL2xpYicsICdsaWInKTtcbmNvbnN0IGhvb2tzRW50cmllcyA9IGdldEVudHJ5UG9pbnRzKCdzcmMvaG9va3MnLCAnaG9va3MnKTtcbmNvbnN0IGNvbXBvbmVudHNFbnRyaWVzID0gZ2V0RW50cnlQb2ludHMoJ3NyYy9jb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZW50cnk6IHtcbiAgICBpbmRleDogJ3NyYy9pbmRleC50cycsXG4gICAgLi4ubGliRW50cmllcyxcbiAgICAuLi5ob29rc0VudHJpZXMsXG4gICAgLi4uY29tcG9uZW50c0VudHJpZXMsXG4gIH0sXG4gIGZvcm1hdDogWydlc20nLCAnY2pzJ10sXG4gIGR0czogdHJ1ZSxcbiAgc291cmNlbWFwOiB0cnVlLFxuICBjbGVhbjogdHJ1ZSxcbiAgbWluaWZ5OiBmYWxzZSxcbiAgc3BsaXR0aW5nOiBmYWxzZSxcbiAgYnVuZGxlOiB0cnVlLFxuICB0cmVlc2hha2U6IHRydWUsXG4gIGV4dGVybmFsOiBbXG4gICAgJ3JlYWN0LWhvb2stZm9ybScsXG4gICAgJ3JlYWN0JywgXG4gICAgJ3JlYWN0LWRvbScsXG4gICAgJ25leHQtdGhlbWVzJyxcbiAgICAnbmV4dC9saW5rJyxcbiAgICAnbmV4dCcsXG4gICAgJ2ZyYW1lci1tb3Rpb24nLFxuICAgICdkYXRlLWZucycsXG4gICAgJ3JlYWN0LWRheS1waWNrZXInLFxuICAgICdxcmNvZGUucmVhY3QnLFxuICAgICdzb25uZXInLFxuICAgICdjbWRrJyxcbiAgICAnZW1ibGEtY2Fyb3VzZWwtcmVhY3QnLFxuICAgICdyZWFjdC1sb2FkaW5nLWluZGljYXRvcnMnLFxuICAgICdAcmFpbmVyc29mdC9kZXNpZ24tdG9rZW5zJyxcbiAgICAnQHJhaW5lcnNvZnQvdXRpbHMnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtYXZhdGFyJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXNlcGFyYXRvcicsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1wcm9ncmVzcycsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1hY2NvcmRpb24nLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtYWxlcnQtZGlhbG9nJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWFzcGVjdC1yYXRpbycsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1jaGVja2JveCcsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1jb2xsYXBzaWJsZScsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1jb250ZXh0LW1lbnUnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtZGlhbG9nJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnUnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtaG92ZXItY2FyZCcsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1sYWJlbCcsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1uYXZpZ2F0aW9uLW1lbnUnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlcicsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1yYWRpby1ncm91cCcsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYScsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zZWxlY3QnLFxuICAgICdAcmFkaXgtdWkvcmVhY3Qtc2xpZGVyJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXNsb3QnLFxuICAgICdAcmFkaXgtdWkvcmVhY3Qtc3dpdGNoJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXRhYnMnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtdG9nZ2xlJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXAnLFxuICAgICdjbGFzcy12YXJpYW5jZS1hdXRob3JpdHknLFxuICAgICdjbHN4JyxcbiAgICAndGFpbHdpbmQtbWVyZ2UnLFxuICAgICdsdWNpZGUtcmVhY3QnLFxuICBdLFxuICB0YXJnZXQ6ICdlczIwMjAnLFxuICBvdXREaXI6ICdkaXN0JyxcbiAgZXNidWlsZE9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMuYmFubmVyID0ge1xuICAgICAganM6ICdcInVzZSBjbGllbnRcIicsXG4gICAgfTtcbiAgICAvLyBTaWxlbmNpYSBhdmlzb3MgXCJ1c2UgY2xpZW50XCIgaWdub3JhZG9zIGFvIGZhemVyIGJ1bmRsZVxuICAgIG9wdGlvbnMubG9nT3ZlcnJpZGUgPSB7XG4gICAgICAnaWdub3JlZC1kaXJlY3RpdmUnOiAnc2lsZW50JyxcbiAgICAgICdpbXBvcnQtaXMtdW5kZWZpbmVkJzogJ3NpbGVudCcsXG4gICAgfTtcbiAgICBvcHRpb25zLmxvZ0xldmVsID0gJ2Vycm9yJztcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxvQkFBb0I7QUFDelYsU0FBUyxhQUFhLGdCQUFnQjtBQUN0QyxTQUFTLFlBQVk7QUFDckIsU0FBUyxnQkFBZ0I7QUFIOEUsSUFBTSx1QkFBdUI7QUFNcEksSUFBSTtBQUNGLFdBQVMsMENBQTBDO0FBQUEsSUFDakQsT0FBTztBQUFBLElBQ1AsS0FBSztBQUFBLEVBQ1AsQ0FBQztBQUNILFNBQVMsT0FBTztBQUNkLFVBQVEsTUFBTSxnREFBcUM7QUFDbkQsVUFBUSxLQUFLLENBQUM7QUFDaEI7QUFHQSxTQUFTLGVBQWUsS0FBYSxPQUFPLElBQTRCO0FBQ3RFLFFBQU0sVUFBa0MsQ0FBQztBQUN6QyxRQUFNLFFBQVEsWUFBWSxHQUFHO0FBRTdCLGFBQVcsUUFBUSxPQUFPO0FBQ3hCLFVBQU0sV0FBVyxLQUFLLEtBQUssSUFBSTtBQUMvQixVQUFNLGVBQWUsT0FBTyxHQUFHLElBQUksSUFBSSxJQUFJLEtBQUs7QUFFaEQsUUFBSSxTQUFTLFFBQVEsRUFBRSxZQUFZLEdBQUc7QUFDcEMsYUFBTyxPQUFPLFNBQVMsZUFBZSxVQUFVLFlBQVksQ0FBQztBQUFBLElBQy9ELFdBQVcsS0FBSyxTQUFTLEtBQUssS0FBSyxLQUFLLFNBQVMsTUFBTSxHQUFHO0FBQ3hELFlBQU0sT0FBTyxhQUFhLFFBQVEsZUFBZSxFQUFFO0FBQ25ELGNBQVEsSUFBSSxJQUFJO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBRUEsU0FBTztBQUNUO0FBR0EsSUFBTSxhQUFhLGVBQWUsV0FBVyxLQUFLO0FBQ2xELElBQU0sZUFBZSxlQUFlLGFBQWEsT0FBTztBQUN4RCxJQUFNLG9CQUFvQixlQUFlLGtCQUFrQixZQUFZO0FBRXZFLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxFQUNMO0FBQUEsRUFDQSxRQUFRLENBQUMsT0FBTyxLQUFLO0FBQUEsRUFDckIsS0FBSztBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsZUFBZSxTQUFTO0FBQ3RCLFlBQVEsU0FBUztBQUFBLE1BQ2YsSUFBSTtBQUFBLElBQ047QUFFQSxZQUFRLGNBQWM7QUFBQSxNQUNwQixxQkFBcUI7QUFBQSxNQUNyQix1QkFBdUI7QUFBQSxJQUN6QjtBQUNBLFlBQVEsV0FBVztBQUFBLEVBQ3JCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
