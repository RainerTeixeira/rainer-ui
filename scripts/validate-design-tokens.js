/**
 * Script de Validação de Design Tokens
 * 
 * Valida se os design tokens estão corretos e disponíveis
 * antes do build para garantir Single Source of Truth
 */

function validateDesignTokens() {
  try {
    // Tentar importar os design tokens
    const tokens = require('@rainersoft/design-tokens');
    
    // Validações básicas
    if (!tokens) {
      throw new Error('Design tokens não encontrados');
    }
    
    if (!tokens.rawColorPrimitive) {
      throw new Error('Cores primitivas não encontradas nos design tokens');
    }
    
    if (!tokens.rawSpacingPrimitive) {
      throw new Error('Spacing primitivo não encontrado nos design tokens');
    }
    
    if (!tokens.rawTypographyPrimitive) {
      throw new Error('Typography primitivo não encontrado nos design tokens');
    }
    
    // Verificar se os tokens principais existem
    if (!tokens.colorPrimitive) {
      throw new Error('colorPrimitive não encontrado');
    }
    
    if (!tokens.spacingPrimitive) {
      throw new Error('spacingPrimitive não encontrado');
    }
    
    if (!tokens.typographyPrimitive) {
      throw new Error('typographyPrimitive não encontrado');
    }
    
    // Log de sucesso
    console.log('✅ Design tokens validados com sucesso');
    console.log(`📦 Versão: ${tokens.$version || 'unknown'}`);
    console.log(`🎨 Cores: ${Object.keys(tokens.colorPrimitive || {}).length} valores`);
    console.log(`📏 Spacing: ${Object.keys(tokens.spacingPrimitive || {}).length} valores`);
    console.log(`🔤 Typography: ${Object.keys(tokens.typographyPrimitive || {}).length} categorias`);
    console.log(`🎭 Temas: ${Object.keys(tokens.themes || {}).length} temas disponíveis`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Erro na validação dos design tokens:');
    console.error(`   ${error.message}`);
    console.error('\n💡 Soluções possíveis:');
    console.error('   1. Verifique se @rainersoft/design-tokens está instalado');
    console.error('   2. Verifique se os tokens foram gerados corretamente');
    console.error('   3. Execute: cd ../rainer-design-tokens && npm run build');
    console.error('   4. Verifique se a estrutura dos tokens está correta');
    
    process.exit(1);
  }
}

// Executar validação
validateDesignTokens();

module.exports = { validateDesignTokens };
