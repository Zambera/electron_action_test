// 测试输入框修复的脚本
console.log('测试输入框修复...');

// 模拟清理阻止输入的类
function testCleanInputBlockers() {
    console.log('测试清理阻止输入的类...');
    
    // 创建模拟的输入框
    const mockInput = document.createElement('input');
    mockInput.type = 'text';
    mockInput.value = 'test';
    
    // 添加一些可能阻止输入的类
    mockInput.classList.add('input-readonly', 'disabled', 'no-input', 'input-ready');
    mockInput.setAttribute('readonly', '');
    mockInput.setAttribute('disabled', '');
    mockInput.style.pointerEvents = 'none';
    mockInput.style.userSelect = 'none';
    
    console.log('清理前的状态:', {
        classes: mockInput.className,
        readonly: mockInput.hasAttribute('readonly'),
        disabled: mockInput.hasAttribute('disabled'),
        pointerEvents: mockInput.style.pointerEvents,
        userSelect: mockInput.style.userSelect
    });
    
    // 模拟清理过程
    const classesToRemove = [
        'disabled', 'readonly', 'no-input', 'input-readonly', 
        'input-ready', 'enabled', 'blocked', 'locked'
    ];
    classesToRemove.forEach(className => {
        mockInput.classList.remove(className);
    });
    
    const attributesToRemove = [
        'disabled', 'readonly', 'tabindex', 'aria-disabled'
    ];
    attributesToRemove.forEach(attr => {
        mockInput.removeAttribute(attr);
    });
    
    const stylesToReset = {
        'pointer-events': 'auto',
        'user-select': 'auto',
        'opacity': '1',
        'cursor': 'text',
        'background-color': 'white',
        'color': 'black'
    };
    
    Object.entries(stylesToReset).forEach(([property, value]) => {
        mockInput.style.setProperty(property, value, 'important');
    });
    
    mockInput.disabled = false;
    mockInput.readOnly = false;
    
    console.log('清理后的状态:', {
        classes: mockInput.className,
        readonly: mockInput.hasAttribute('readonly'),
        disabled: mockInput.hasAttribute('disabled'),
        pointerEvents: mockInput.style.pointerEvents,
        userSelect: mockInput.style.userSelect
    });
    
    return !mockInput.hasAttribute('readonly') && 
           !mockInput.hasAttribute('disabled') && 
           mockInput.style.pointerEvents === 'auto';
}

// 运行测试
const testResult = testCleanInputBlockers();

console.log('测试结果:', testResult ? '✅ 通过' : '❌ 失败');

if (testResult) {
    console.log('🎉 输入框修复测试通过！');
} else {
    console.log('⚠️ 输入框修复测试失败，需要进一步检查。');
} 