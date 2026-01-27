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
  }
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL2hvbWUvcmFpbmVyL1x1MDBDMXJlYSBkZSB0cmFiYWxoby9kZXNlbnZvbHZpbWVudG8vcmFpbmVyLXVpL3RzdXAuY29uZmlnLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9ob21lL3JhaW5lci9cdTAwQzFyZWEgZGUgdHJhYmFsaG8vZGVzZW52b2x2aW1lbnRvL3JhaW5lci11aVwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vaG9tZS9yYWluZXIvJUMzJTgxcmVhJTIwZGUlMjB0cmFiYWxoby9kZXNlbnZvbHZpbWVudG8vcmFpbmVyLXVpL3RzdXAuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndHN1cCc7XG5pbXBvcnQgeyByZWFkZGlyU3luYywgc3RhdFN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGVjU3luYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG4vLyBFeGVjdXRhciB2YWxpZGFcdTAwRTdcdTAwRTNvIGRlIGRlc2lnbiB0b2tlbnMgYW50ZXMgZG8gYnVpbGRcbnRyeSB7XG4gIGV4ZWNTeW5jKCdub2RlIHNjcmlwdHMvdmFsaWRhdGUtZGVzaWduLXRva2Vucy5qcycsIHsgXG4gICAgc3RkaW86ICdpbmhlcml0JyxcbiAgICBjd2Q6IF9fZGlybmFtZSBcbiAgfSk7XG59IGNhdGNoIChlcnJvcikge1xuICBjb25zb2xlLmVycm9yKCdcdTI3NEMgVmFsaWRhXHUwMEU3XHUwMEUzbyBkZSBkZXNpZ24gdG9rZW5zIGZhbGhvdScpO1xuICBwcm9jZXNzLmV4aXQoMSk7XG59XG5cbi8vIEZ1blx1MDBFN1x1MDBFM28gcGFyYSBvYnRlciB0b2RvcyBvcyBhcnF1aXZvcyBkZSB1bSBkaXJldFx1MDBGM3JpbyByZWN1cnNpdmFtZW50ZVxuZnVuY3Rpb24gZ2V0RW50cnlQb2ludHMoZGlyOiBzdHJpbmcsIGJhc2UgPSAnJyk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICBjb25zdCBlbnRyaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGNvbnN0IGl0ZW1zID0gcmVhZGRpclN5bmMoZGlyKTtcbiAgXG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gam9pbihkaXIsIGl0ZW0pO1xuICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IGJhc2UgPyBgJHtiYXNlfS8ke2l0ZW19YCA6IGl0ZW07XG4gICAgXG4gICAgaWYgKHN0YXRTeW5jKGZ1bGxQYXRoKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVudHJpZXMsIGdldEVudHJ5UG9pbnRzKGZ1bGxQYXRoLCByZWxhdGl2ZVBhdGgpKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uZW5kc1dpdGgoJy50cycpIHx8IGl0ZW0uZW5kc1dpdGgoJy50c3gnKSkge1xuICAgICAgY29uc3QgbmFtZSA9IHJlbGF0aXZlUGF0aC5yZXBsYWNlKC9cXC4odHN8dHN4KSQvLCAnJyk7XG4gICAgICBlbnRyaWVzW25hbWVdID0gZnVsbFBhdGg7XG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZW50cmllcztcbn1cblxuLy8gR2VyYXIgZW50cnkgcG9pbnRzIHBhcmEgbGliLCBob29rcyBlIGNvbXBvbmVudHNcbmNvbnN0IGxpYkVudHJpZXMgPSBnZXRFbnRyeVBvaW50cygnc3JjL2xpYicsICdsaWInKTtcbmNvbnN0IGhvb2tzRW50cmllcyA9IGdldEVudHJ5UG9pbnRzKCdzcmMvaG9va3MnLCAnaG9va3MnKTtcbmNvbnN0IGNvbXBvbmVudHNFbnRyaWVzID0gZ2V0RW50cnlQb2ludHMoJ3NyYy9jb21wb25lbnRzJywgJ2NvbXBvbmVudHMnKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZW50cnk6IHtcbiAgICBpbmRleDogJ3NyYy9pbmRleC50cycsXG4gICAgLi4ubGliRW50cmllcyxcbiAgICAuLi5ob29rc0VudHJpZXMsXG4gICAgLi4uY29tcG9uZW50c0VudHJpZXMsXG4gIH0sXG4gIGZvcm1hdDogWydlc20nLCAnY2pzJ10sXG4gIGR0czogdHJ1ZSxcbiAgc291cmNlbWFwOiB0cnVlLFxuICBjbGVhbjogdHJ1ZSxcbiAgbWluaWZ5OiBmYWxzZSxcbiAgc3BsaXR0aW5nOiBmYWxzZSxcbiAgYnVuZGxlOiB0cnVlLFxuICB0cmVlc2hha2U6IHRydWUsXG4gIGV4dGVybmFsOiBbXG4gICAgJ3JlYWN0LWhvb2stZm9ybScsXG4gICAgJ3JlYWN0JywgXG4gICAgJ3JlYWN0LWRvbScsXG4gICAgJ25leHQtdGhlbWVzJyxcbiAgICAnbmV4dC9saW5rJyxcbiAgICAnbmV4dCcsXG4gICAgJ2ZyYW1lci1tb3Rpb24nLFxuICAgICdkYXRlLWZucycsXG4gICAgJ3JlYWN0LWRheS1waWNrZXInLFxuICAgICdxcmNvZGUucmVhY3QnLFxuICAgICdzb25uZXInLFxuICAgICdjbWRrJyxcbiAgICAnZW1ibGEtY2Fyb3VzZWwtcmVhY3QnLFxuICAgICdyZWFjdC1sb2FkaW5nLWluZGljYXRvcnMnLFxuICAgICdAcmFpbmVyc29mdC9kZXNpZ24tdG9rZW5zJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWF2YXRhcicsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zZXBhcmF0b3InLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtcHJvZ3Jlc3MnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWFsZXJ0LWRpYWxvZycsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1hc3BlY3QtcmF0aW8nLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3gnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtY29sbGFwc2libGUnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtY29udGV4dC1tZW51JyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51JyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LWhvdmVyLWNhcmQnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtbGFiZWwnLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtbmF2aWdhdGlvbi1tZW51JyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXBvcG92ZXInLFxuICAgICdAcmFkaXgtdWkvcmVhY3QtcmFkaW8tZ3JvdXAnLFxuICAgICdAcmFkaXgtdWkvcmVhY3Qtc2Nyb2xsLWFyZWEnLFxuICAgICdAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0JyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXNsaWRlcicsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC1zbG90JyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXN3aXRjaCcsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC10YWJzJyxcbiAgICAnQHJhZGl4LXVpL3JlYWN0LXRvZ2dsZScsXG4gICAgJ0ByYWRpeC11aS9yZWFjdC10b29sdGlwJyxcbiAgICAnY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JyxcbiAgICAnY2xzeCcsXG4gICAgJ3RhaWx3aW5kLW1lcmdlJyxcbiAgICAnbHVjaWRlLXJlYWN0JyxcbiAgXSxcbiAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgb3V0RGlyOiAnZGlzdCcsXG4gIGVzYnVpbGRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zLmJhbm5lciA9IHtcbiAgICAgIGpzOiAnXCJ1c2UgY2xpZW50XCInLFxuICAgIH07XG4gIH0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULFNBQVMsb0JBQW9CO0FBQ3pWLFNBQVMsYUFBYSxnQkFBZ0I7QUFDdEMsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsZ0JBQWdCO0FBSDhFLElBQU0sdUJBQXVCO0FBTXBJLElBQUk7QUFDRixXQUFTLDBDQUEwQztBQUFBLElBQ2pELE9BQU87QUFBQSxJQUNQLEtBQUs7QUFBQSxFQUNQLENBQUM7QUFDSCxTQUFTLE9BQU87QUFDZCxVQUFRLE1BQU0sZ0RBQXFDO0FBQ25ELFVBQVEsS0FBSyxDQUFDO0FBQ2hCO0FBR0EsU0FBUyxlQUFlLEtBQWEsT0FBTyxJQUE0QjtBQUN0RSxRQUFNLFVBQWtDLENBQUM7QUFDekMsUUFBTSxRQUFRLFlBQVksR0FBRztBQUU3QixhQUFXLFFBQVEsT0FBTztBQUN4QixVQUFNLFdBQVcsS0FBSyxLQUFLLElBQUk7QUFDL0IsVUFBTSxlQUFlLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLO0FBRWhELFFBQUksU0FBUyxRQUFRLEVBQUUsWUFBWSxHQUFHO0FBQ3BDLGFBQU8sT0FBTyxTQUFTLGVBQWUsVUFBVSxZQUFZLENBQUM7QUFBQSxJQUMvRCxXQUFXLEtBQUssU0FBUyxLQUFLLEtBQUssS0FBSyxTQUFTLE1BQU0sR0FBRztBQUN4RCxZQUFNLE9BQU8sYUFBYSxRQUFRLGVBQWUsRUFBRTtBQUNuRCxjQUFRLElBQUksSUFBSTtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUVBLFNBQU87QUFDVDtBQUdBLElBQU0sYUFBYSxlQUFlLFdBQVcsS0FBSztBQUNsRCxJQUFNLGVBQWUsZUFBZSxhQUFhLE9BQU87QUFDeEQsSUFBTSxvQkFBb0IsZUFBZSxrQkFBa0IsWUFBWTtBQUV2RSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsSUFDSCxHQUFHO0FBQUEsRUFDTDtBQUFBLEVBQ0EsUUFBUSxDQUFDLE9BQU8sS0FBSztBQUFBLEVBQ3JCLEtBQUs7QUFBQSxFQUNMLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLFVBQVU7QUFBQSxJQUNSO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsZUFBZSxTQUFTO0FBQ3RCLFlBQVEsU0FBUztBQUFBLE1BQ2YsSUFBSTtBQUFBLElBQ047QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
