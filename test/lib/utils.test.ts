/**
 * Testes para utils
 * 
 * Verifica funções utilitárias e tokens de motion
 */
import { cn, motion, ANIMATION_DURATIONS, ANIMATION_EASINGS, ANIMATION_DELAYS } from '../../src/lib/utils';

describe('utils', () => {
  describe('cn', () => {
    it('combina classes simples', () => {
      const result = cn('class1', 'class2');
      expect(result).toBe('class1 class2');
    });

    it('remove classes duplicadas do tailwind', () => {
      const result = cn('bg-red-500', 'bg-blue-500');
      expect(result).toBe('bg-blue-500');
    });

    it('lida com valores undefined', () => {
      const result = cn('class1', undefined, 'class2');
      expect(result).toBe('class1 class2');
    });

    it('lida com valores condicionais', () => {
      const isActive = true;
      const result = cn('base', isActive && 'active');
      expect(result).toBe('base active');
    });

    it('lida com valores condicionais false', () => {
      const isActive = false;
      const result = cn('base', isActive && 'active');
      expect(result).toBe('base');
    });

    it('aceita objetos de classes', () => {
      const result = cn({ 'class1': true, 'class2': false, 'class3': true });
      expect(result).toBe('class1 class3');
    });
  });

  describe('motion tokens', () => {
    it('motion está definido', () => {
      expect(motion).toBeDefined();
    });

    it('motion.duration está definido', () => {
      expect(motion.duration).toBeDefined();
    });

    it('motion.easing está definido', () => {
      expect(motion.easing).toBeDefined();
    });

    it('motion.delay está definido', () => {
      expect(motion.delay).toBeDefined();
    });
  });

  describe('ANIMATION_DURATIONS', () => {
    it('está definido', () => {
      expect(ANIMATION_DURATIONS).toBeDefined();
    });

    it('contém valores de duração', () => {
      expect(typeof ANIMATION_DURATIONS).toBe('object');
    });
  });

  describe('ANIMATION_EASINGS', () => {
    it('está definido', () => {
      expect(ANIMATION_EASINGS).toBeDefined();
    });

    it('contém valores de easing', () => {
      expect(typeof ANIMATION_EASINGS).toBe('object');
    });
  });

  describe('ANIMATION_DELAYS', () => {
    it('está definido', () => {
      expect(ANIMATION_DELAYS).toBeDefined();
    });

    it('contém valores de delay', () => {
      expect(typeof ANIMATION_DELAYS).toBe('object');
    });
  });
});
