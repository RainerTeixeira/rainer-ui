import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  IconButton,
  LinkButton,
  SegmentedControl,
  Slider,
  Switch,
  Toggle,
} from '@ui/components/ui';
import {
  Bookmark,
  Link2,
  Mail,
  Moon,
  Send,
  Share2,
  Sparkles,
  Sun,
  ThumbsUp,
} from 'lucide-react';
import { cn } from '@ui/lib/utils';

// Componente ThemeToggle simples sem dependências
function SimpleThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Verificar tema inicial
    const theme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = theme === 'dark' || (!theme && systemDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <span className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-full dark:bg-slate-900/80 dark:border-white/10">
          Claro
        </span>
        <button className="h-9 w-9 rounded-md bg-gray-200 border border-gray-300" disabled />
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <span className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 rounded-full dark:bg-slate-900/80 dark:border-white/10">
        {isDark ? 'Cyberpunk' : 'Claro'}
      </span>
      <button
        onClick={toggle}
        className="relative p-2 rounded-lg bg-gradient-to-r from-neon-cyan to-cyan-600 text-gray-950 shadow-lg shadow-neon-cyan hover:shadow-neon-cyan hover:shadow-xl transition-all duration-200 hover:scale-105 dark:from-cyan-400 dark:to-blue-400"
        aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema cyberpunk'}
      >
        {isDark ? (
          <Sun className="w-4 h-4" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type ButtonVariant = React.ComponentProps<typeof Button>['variant'];
type IconVariant = React.ComponentProps<typeof IconButton>['variant'];
type LinkVariant = React.ComponentProps<typeof LinkButton>['variant'];
type LinkSize = NonNullable<React.ComponentProps<typeof LinkButton>['size']>;

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const buttonVariantsList: ButtonVariant[] = [
  'default',
  'outline',
  'ghost',
  'link',
  'destructive',
  'secondary',
  'glass',
  'neon',
];

const iconVariantsList: IconVariant[] = [
  'default',
  'outline',
  'ghost',
  'destructive',
  'glass',
  'neon',
];

const linkVariantsList: LinkVariant[] = [
  'default',
  'ghost',
  'outline',
  'neon',
  'muted',
  'success',
  'warning',
  'info',
  'destructive',
];

const linkSizes: LinkSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const icons = {
  send: <Send className="size-4" />,
  sparkles: <Sparkles className="size-4" />,
};

/* -------------------------------------------------------------------------- */
/*                                  SECTION                                   */
/* -------------------------------------------------------------------------- */

function Section({
  title,
  badge = 'Preview',
  children,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="
        group relative space-y-5 rounded-2xl
        border border-white/10
        bg-white/70
        p-6 shadow-lg
        backdrop-blur-xl
        transition-all
        hover:-translate-y-0.5 hover:shadow-xl
        dark:border-white/10 dark:bg-slate-900/80
        dark:hover:border-cyan-500/30
      "
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100 dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-violet-500/10" />

      <header className="relative flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Rainer UI
          </p>
          <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h2>
        </div>

        <span className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-3 py-1 text-xs font-medium text-white shadow dark:from-cyan-400 dark:to-blue-400 dark:shadow-neon-cyan">
          {badge}
        </span>
      </header>

      <div className="relative">{children}</div>
    </section>
  );
}


/* -------------------------------------------------------------------------- */
/*                                SHOWCASES                                   */
/* -------------------------------------------------------------------------- */

function ButtonsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Section title="Buttons">
        <div className="grid gap-4 sm:grid-cols-2">
          {buttonVariantsList.map((variant) => (
            <div
              key={variant}
              className={cn(
                'space-y-3 rounded-xl p-4 transition',
                variant === 'neon' && 'bg-cyan-50/60 dark:bg-cyan-500/10 dark:border-cyan-500/20',
                variant === 'destructive' && 'bg-red-50/60 dark:bg-red-500/10 dark:border-red-500/20',
                variant === 'glass' && 'bg-white/60 dark:bg-slate-800/40 dark:border-white/10',
                variant === 'secondary' && 'bg-gray-50/60 dark:bg-gray-800/40 dark:border-gray-600/20'
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {variant}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant={variant}
                  size="sm"
                  animation="scale"
                  className="transition-transform"
                >
                  {icons.send}
                  {variant}
                </Button>

                <Button variant={variant}>{variant}</Button>

                <Button
                  variant={variant}
                  size="lg"
                  animation="glow"
                  className="transition-transform"
                >
                  {icons.sparkles}
                  {variant}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icon Buttons">
        <div className="grid gap-4 sm:grid-cols-2">
          {iconVariantsList.map((variant) => (
            <div key={variant} className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {variant}
              </p>

              <div className="flex gap-3">
                <IconButton
                  aria-label="like"
                  variant={variant}
                  size="icon"
                  animation="scale"
                  icon={<ThumbsUp />}
                  tooltip="Curtir"
                />
                <IconButton
                  aria-label="share"
                  variant={variant}
                  size="icon-sm"
                  animation="bounce"
                  icon={<Share2 />}
                  tooltip="Compartilhar"
                  tooltipPosition="right"
                />
                <IconButton
                  aria-label="save"
                  variant={variant}
                  size="icon-lg"
                  animation="glow"
                  icon={<Bookmark />}
                  tooltip="Salvar"
                  tooltipPosition="bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Link Buttons">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {linkVariantsList.map((variant) => (
              <LinkButton
                key={variant}
                href="#"
                variant={variant}
                animation="scale"
                leftIcon={<Link2 className="size-4" />}
                className={cn(
                  variant === 'neon' && 'text-neon-cyan hover:text-neon-cyan-glow',
                  variant === 'success' && 'text-emerald-600 hover:text-emerald-700',
                  variant === 'pill' && 'px-4 py-2 rounded-full'
                )}
              >
                {variant}
              </LinkButton>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {linkSizes.map((size) => (
              <LinkButton
                key={size}
                href="#"
                size={size}
                weight="semibold"
                animation="slide"
                leftIcon={<Mail className="size-4" />}
                className="border border-gray-200 dark:border-gray-600 px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {size}
              </LinkButton>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Loading States">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button loading variant="default">
              Processando...
            </Button>
            <Button loading variant="neon" animation="pulse" className="animate-pulse">
              Carregando...
            </Button>
            <IconButton 
              loading 
              variant="outline" 
              tooltip="Processando..."
              icon={<Send />}
            />
            <LinkButton 
              loading 
              variant="success"
              leftIcon={<Send />}
              className="text-emerald-600"
            >
              Enviando...
            </LinkButton>
          </div>
        </div>
      </Section>
    </div>
  );
}

function AvatarShowcase() {
  return (
    <Section title="Avatar">
      <div className="space-y-6">
        {/* Tamanhos */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Tamanhos
          </p>
          <div className="flex items-center gap-4">
            <Avatar size="xs" name="Ana" />
            <Avatar size="sm" name="Ana Silva" />
            <Avatar size="md" name="Ana Silva" />
            <Avatar size="lg" name="Ana Silva" />
            <Avatar size="xl" name="Ana Silva" />
            <Avatar size="2xl" name="Ana Silva" />
            <Avatar size="3xl" name="Ana Silva" />
          </div>
        </div>

        {/* Variantes */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Variantes
          </p>
          <div className="flex items-center gap-4">
            <Avatar size="lg" variant="circular" name="João Santos" />
            <Avatar size="lg" variant="rounded" name="Maria Oliveira" />
            <Avatar size="lg" variant="square" name="Pedro Costa" />
          </div>
        </div>

        {/* Com Imagens */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Com Imagens
          </p>
          <div className="flex items-center gap-4">
            <Avatar size="lg">
              <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="Sarah Johnson" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <Avatar size="lg" className="ring-2 ring-primary/60 shadow-lg">
              <AvatarImage src="https://i.pravatar.cc/150?img=55" alt="Mike Chen" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="https://i.pravatar.cc/150?img=68" alt="Emma Wilson" />
              <AvatarFallback>EW</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Cores Automáticas (baseadas no nome) */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Cores Automáticas
          </p>
          <div className="flex items-center gap-4">
            <Avatar size="lg" name="Rainer Teixeira" />
            <Avatar size="lg" name="Design System" />
            <Avatar size="lg" name="Frontend Team" />
            <Avatar size="lg" name="User Experience" />
            <Avatar size="lg" name="Development" />
            <Avatar size="lg" name="Marketing" />
          </div>
        </div>

        {/* Cores Customizadas */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Cores Customizadas
          </p>
          <div className="flex items-center gap-4">
            <Avatar size="lg" fallbackColor="bg-gradient-to-br from-blue-500 to-cyan-500" name="Custom 1" />
            <Avatar size="lg" fallbackColor="bg-gradient-to-br from-purple-500 to-pink-500" name="Custom 2" />
            <Avatar size="lg" fallbackColor="bg-gradient-to-br from-green-500 to-emerald-500" name="Custom 3" />
            <Avatar size="lg" fallbackColor="bg-gradient-to-br from-orange-500 to-red-500" name="Custom 4" />
          </div>
        </div>

        {/* Iniciais Customizadas */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Iniciais Customizadas
          </p>
          <div className="flex items-center gap-4">
            <Avatar size="lg" name="Rainer" maxInitials={1} />
            <Avatar size="lg" name="Frontend Development" maxInitials={2} />
            <Avatar size="lg" name="User Experience Design" maxInitials={3} />
          </div>
        </div>

        {/* Estados Especiais */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Estados Especiais
          </p>
          <div className="flex items-center gap-4">
            <Avatar size="lg" name="Sem Imagem" />
            <Avatar size="lg" name="" fallbackColor="bg-red-500" />
            <Avatar size="lg" fallbackColor="bg-gray-300" textColor="text-gray-700">
              <span className="text-lg">👤</span>
            </Avatar>
          </div>
        </div>
      </div>
    </Section>
  );
}

function TogglesAndSwitches() {
  return (
    <Section title="Switch & Toggle">
      <div className="flex gap-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Switch
          </p>
          <div className="flex gap-4">
            <Switch />
            <Switch defaultChecked className="data-[state=checked]:bg-neon-cyan dark:data-[state=checked]:bg-cyan-400" />
            <Switch disabled className="opacity-50" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Toggle
          </p>
          <div className="flex gap-3">
            <Toggle variant="outline" className="border-2 hover:border-neon-cyan dark:hover:border-cyan-400">
              <Sun className="size-4" />
            </Toggle>
            <Toggle variant="outline" className="border-2 hover:border-neon-cyan dark:hover:border-cyan-400">
              <Moon className="size-4" />
            </Toggle>
            <Toggle variant="outline" className="border-2 border-neon-cyan bg-neon-cyan/10 dark:border-cyan-400 dark:bg-cyan-400/10">
              <Sparkles className="size-4 text-neon-cyan dark:text-cyan-400" />
            </Toggle>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SliderShowcase() {
  return (
    <Section title="Slider">
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Single Value
          </p>
          <Slider 
            defaultValue={[30]} 
            className="[&_[data-orientation=horizontal]]:bg-gray-200 dark:bg-gray-700 [&_[data-state=active]]:bg-neon-cyan dark:[&_[data-state=active]]:bg-cyan-400"
          />
        </div>
        
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Range
          </p>
          <Slider 
            defaultValue={[20, 60]} 
            className="[&_[data-orientation=horizontal]]:bg-gray-200 dark:bg-gray-700 [&_[data-state=active]]:bg-neon-cyan dark:[&_[data-state=active]]:bg-cyan-400"
          />
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            With Steps
          </p>
          <Slider 
            defaultValue={[45]} 
            max={100}
            step={5}
            className="[&_[data-orientation=horizontal]]:bg-gray-200 dark:bg-gray-700 [&_[data-state=active]]:bg-neon-cyan dark:[&_[data-state=active]]:bg-cyan-400"
          />
        </div>
      </div>
    </Section>
  );
}

function SegmentedControlShowcase() {
  return (
    <Section title="Segmented Control">
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Default Options
          </p>
          <SegmentedControl
            options={[
              { label: 'Padrão', value: 'default' },
              { label: 'Sucesso', value: 'success' },
              { label: 'Aviso', value: 'warning' },
            ]}
            defaultValue="default"
            className="[&_[data-state=active]]:bg-neon-cyan dark:[&_[data-state=active]]:bg-cyan-400 [&_[data-state=active]]:text-gray-950"
          />
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            With Icons
          </p>
          <SegmentedControl
            options={[
              { label: '🔥 Popular', value: 'popular' },
              { label: '⭐ Favoritos', value: 'favorites' },
              { label: '🔍 Buscar', value: 'search' },
            ]}
            defaultValue="popular"
            className="[&_[data-state=active]]:bg-gradient-to-r from-neon-cyan to-cyan-600 dark:from-cyan-400 dark:to-blue-400 [&_[data-state=active]]:text-gray-950"
          />
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Large Size
          </p>
          <SegmentedControl
            options={[
              { label: 'Início', value: 'home' },
              { label: 'Dashboard', value: 'dashboard' },
              { label: 'Config', value: 'settings' },
              { label: 'Perfil', value: 'profile' },
            ]}
            defaultValue="home"
            size="lg"
            className="[&_[data-state=active]]:bg-neon-cyan dark:[&_[data-state=active]]:bg-cyan-400 [&_[data-state=active]]:text-gray-950 text-base px-4 py-2"
          />
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    APP                                     */
/* -------------------------------------------------------------------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 p-6 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 transition-colors duration-300">
      <SimpleThemeToggle />
      
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 transition-colors duration-300">
          <div className="absolute -top-32 -right-32 size-80 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-400/30" />

          <div className="relative flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg">
              <Sparkles />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Rainer UI
              </p>
              <h1 className="text-3xl font-bold tracking-tight dark:text-white">
                Buttons{' '}
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400">
                  Showcase
                </span>
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Demonstração visual completa dos componentes com temas cyberpunk.
              </p>
            </div>
          </div>
        </header>

        <ButtonsGrid />
        <AvatarShowcase />
        <TogglesAndSwitches />
        <SliderShowcase />
        <SegmentedControlShowcase />

        <footer className="flex items-center justify-between rounded-xl border border-white/10 bg-white/70 p-4 text-sm text-slate-600 backdrop-blur dark:bg-slate-900/80 dark:text-slate-300 transition-colors duration-300">
          <span>@rainersoft/ui</span>
          <span className="font-mono text-xs">localhost:3010</span>
        </footer>
      </div>
    </div>
  );
}
