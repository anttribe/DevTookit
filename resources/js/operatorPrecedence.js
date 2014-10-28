/**
 * Created by zhaoyong on 2014/10/28.
 * 运算符优先级
 */
(function ($) {
    'use strict';

    // java运算符
    var javaOperatorData = [
        {precedence: '1', operator: '() [] .', associativity: '从左到右'},
        {precedence: '2', operator: '! +(正) -(负) ~ ++ --', associativity: '从右向左'},
        {precedence: '3', operator: '* / %', associativity: '从左向右'},
        {precedence: '4', operator: '+(加) -(减)', associativity: '从左向右'},
        {precedence: '5', operator: '<< >> >>>', associativity: '从左向右'},
        {precedence: '6', operator: '< <= > >= instanceof', associativity: '从左向右'},
        {precedence: '7', operator: '== !=', associativity: '从左向右'},
        {precedence: '8', operator: '&(按位与)', associativity: '从左向右'},
        {precedence: '9', operator: '^', associativity: '从左向右'},
        {precedence: '10', operator: '|', associativity: '从左向右'},
        {precedence: '11', operator: '&&', associativity: '从左向右'},
        {precedence: '12', operator: '||', associativity: '从左向右'},
        {precedence: '13', operator: '?:', associativity: '从右向左'},
        {precedence: '14', operator: '= += -= *= /= %= &= |= ^= ~= <<= >>= >>>=', associativity: '从右向左'}
    ];

    //C++运算符
    var C$OperatorData = [
        {precedence: '1', operator: '::', associativity: '从左到右'},
        {precedence: '2', operator: 'a++ a--', associativity: '从左到右'},
        {precedence: '6', operator: '()', associativity: '从左到右'},
        {precedence: '7', operator: '[]', associativity: '从左到右'},
        {precedence: '8', operator: '.', associativity: '从左到右'},
        {precedence: '9', operator: '−>', associativity: '从左到右'},
        {precedence: '10', operator: '++a --a', associativity: '从右向左'},
        {precedence: '11', operator: '+ −', associativity: '从右向左'},
        {precedence: '12', operator: '!', associativity: '从右向左'},
        {precedence: '13', operator: '~', associativity: '从右向左'},
        {precedence: '3', operator: '(type)', associativity: '从右向左'},
        {precedence: '7', operator: '*', associativity: '从右向左'},
        {precedence: '8', operator: 'sizeof', associativity: '从右向左'},
        {precedence: '9', operator: 'new, new[]', associativity: '从右向左'},
        {precedence: '10', operator: 'delete, delete[]', associativity: '从右向左'},
        {precedence: '11', operator: '.* ->*', associativity: '从左到右'},
        {precedence: '12', operator: '* / %', associativity: '从左到右'},
        {precedence: '13', operator: '+ −', associativity: '从左到右'},
        {precedence: '14', operator: '<< >>', associativity: '从左到右'},
        {precedence: '4', operator: '< <= > >=', associativity: '从左到右'},
        {precedence: '5', operator: '== !=', associativity: '从左到右'},
        {precedence: '6', operator: '& ^ |', associativity: '从左到右'},
        {precedence: '7', operator: '&& ||', associativity: '从左到右'},
        {precedence: '8', operator: '?:', associativity: '从右向左'},
        {precedence: '9', operator: '= += −=', associativity: '从右向左'},
        {precedence: '10', operator: '*= /= %=', associativity: '从右向左'},
        {precedence: '11', operator: '<<= >>=', associativity: '从右向左'},
        {precedence: '12', operator: '&= ^= |=', associativity: '从右向左'},
        {precedence: '13', operator: 'throw', associativity: '从右向左'},
        {precedence: '14', operator: ',', associativity: '从左到右'}
    ];

    //C语言运算符
    var COperatorData = [
        {precedence: '1', operator: '++ --', description: 'Suffix/postfix increment and decrement', associativity: '从左到右'},
        {precedence: '2', operator: '()', description: 'Function call', associativity: '从左到右'},
        {precedence: '3', operator: '[]', description: 'Array subscripting', associativity: '从左到右'},
        {precedence: '4', operator: '.', description: 'Structure and union member access', associativity: '从左到右'},
        {precedence: '5', operator: '−>', description: 'Structure and union member access through pointer', associativity: '从左到右'},
        {precedence: '6', operator: '(type){list}', description: 'Compound literal(C99)', associativity: '从左到右'},
        {precedence: '7', operator: '++ --', description: 'Prefix increment and decrement', associativity: '从右向左'},
        {precedence: '8', operator: '+ −', description: 'Unary plus and minus', associativity: '从右向左'},
        {precedence: '9', operator: '! ~', description: 'Logical NOT and bitwise NOT', associativity: '从右向左'},
        {precedence: '10', operator: '(type)', description: 'Type cast', associativity: '从右向左'},
        {precedence: '11', operator: '*', description: 'Indirection (dereference)', associativity: '从右向左'},
        {precedence: '12', operator: '&', description: 'Address-of', associativity: '从右向左'},
        {precedence: '13', operator: 'sizeof', description: 'Size-of', associativity: '从右向左'},
        {precedence: '14', operator: '_Alignof', description: 'Multiplication, division, and remainder', associativity: '从右向左'},
        {precedence: '15', operator: '* / %', description: 'Multiplication, division, and remainder', associativity: '从左到右'},
        {precedence: '16', operator: '+ −', description: 'Addition and subtraction', associativity: '从左到右'},
        {precedence: '17', operator: '<< >>', description: 'Bitwise left shift and right shift', associativity: '从左到右'},
        {precedence: '18', operator: '< <=', description: 'For relational operators < and ≤ respectively', associativity: '从左到右'},
        {precedence: '19', operator: '> >=', description: 'For relational operators > and ≥ respectively', associativity: '从左到右'},
        {precedence: '20', operator: '== !=', description: 'For relational = and ≠ respectively', associativity: '从左到右'},
        {precedence: '21', operator: '&', description: 'Bitwise AND', associativity: '从左到右'},
        {precedence: '22', operator: '^', description: 'Bitwise XOR (exclusive or)', associativity: '从左到右'},
        {precedence: '23', operator: '|', description: 'Bitwise OR (inclusive or)', associativity: '从左到右'},
        {precedence: '24', operator: '&&', description: 'Logical AND', associativity: '从左到右'},
        {precedence: '25', operator: '||', description: 'Logical OR', associativity: '从左到右'},
        {precedence: '26', operator: '?:', description: 'Ternary conditional', associativity: '从右向左'},
        {precedence: '27', operator: '=', description: 'Simple assignment', associativity: '从右向左'},
        {precedence: '28', operator: '+= −=', description: 'Assignment by sum and difference', associativity: '从右向左'},
        {precedence: '29', operator: '*= /= %=', description: 'Assignment by product, quotient, and remainder', associativity: '从右向左'},
        {precedence: '30', operator: '<<= >>=', description: 'Assignment by bitwise left shift and right shift', associativity: '从右向左'},
        {precedence: '31', operator: '&= ^= |=', description: 'Assignment by bitwise AND, XOR, and OR', associativity: '从右向左'},
        {precedence: '32', operator: ',', description: 'Comma', associativity: '从左到右'}
    ];

    //php操作符
    var phpaOperatorData = [
        {precedence: '1', operator: 'clone new', description: 'clone 和 new', associativity: '非结合'},
        {precedence: '2', operator: '[', description: 'array()', associativity: '从左到右'},
        {precedence: '3', operator: '++ --', description: '递增／递减运算符', associativity: '非结合'},
        {precedence: '4', operator: '~ - (int) (float) (string) (array) (object) (bool) @', description: '类型', associativity: '非结合'},
        {precedence: '5', operator: 'instanceof', description: '类型', associativity: '非结合'},
        {precedence: '6', operator: '!', description: '逻辑操作符', associativity: '从右向左'},
        {precedence: '7', operator: '* / %', description: '算术运算符', associativity: '从左到右'},
        {precedence: '8', operator: '+ - .', description: '算术运算符 和 字符串运算符', associativity: '从左到右'},
        {precedence: '9', operator: '<< >>', description: '位运算符', associativity: '从左到右'},
        {precedence: '10', operator: '< <= > >= <>', description: '比较运算符', associativity: '非结合'},
        {precedence: '11', operator: '== != === !==', description: '比较运算符', associativity: '非结合'},
        {precedence: '12', operator: '&', description: '位运算符 和 引用', associativity: '从左到右'},
        {precedence: '13', operator: '^', description: '位运算符', associativity: '从左到右'},
        {precedence: '14', operator: '|', description: '位运算符', associativity: '从左到右'},
        {precedence: '15', operator: '&&', description: '逻辑运算符', associativity: '从左到右'},
        {precedence: '16', operator: '||', description: '逻辑运算符', associativity: '从左到右'},
        {precedence: '17', operator: '? :', description: '三元运算符', associativity: '从左到右'},
        {precedence: '18', operator: '= += -= *= /= .= %= &= |= ^= <<= >>=', description: '赋值运算符', associativity: '从右向左'},
        {precedence: '19', operator: 'and', description: '逻辑运算符', associativity: '从左到右'},
        {precedence: '20', operator: 'xor', description: '逻辑运算符', associativity: '从左到右'},
        {precedence: '21', operator: 'or', description: '逻辑运算符', associativity: '从左到右'},
        {precedence: '22', operator: ',', description: '多处用到', associativity: '从左到右'}
    ];

    //python运算符
    var pythonOperatorData = [
        {precedence: '1', operator: 'lambda', description: 'Lambda表达式'},
        {precedence: '2', operator: 'or', description: '布尔“或”'},
        {precedence: '3', operator: 'and', description: '布尔“与”'},
        {precedence: '4', operator: 'notx', description: '布尔“非”'},
        {precedence: '5', operator: 'in，notin', description: '成员测试'},
        {precedence: '6', operator: 'is，isnot', description: '同一性测试'},
        {precedence: '7', operator: '<，<=，>，>=，!=，==', description: '比较'},
        {precedence: '8', operator: '|', description: '按位或'},
        {precedence: '9', operator: '^', description: '按位异或'},
        {precedence: '10', operator: '&', description: '按位与'},
        {precedence: '11', operator: '<<，>>', description: '移位'},
        {precedence: '12', operator: '+，-', description: '加法与减法'},
        {precedence: '13', operator: '*，/，%', description: '乘法、除法与取余'},
        {precedence: '14', operator: '+x，-x', description: '正负号'},
        {precedence: '15', operator: '~x', description: '按位翻转'},
        {precedence: '16', operator: '**', description: '指数'},
        {precedence: '17', operator: 'x.attribute', description: '属性参考'},
        {precedence: '18', operator: 'x[index]', description: '下标'},
        {precedence: '19', operator: 'x[index:index]', description: '寻址段'},
        {precedence: '20', operator: 'f(arguments...)', description: '函数调用'},
        {precedence: '21', operator: '(experession,...)', description: '绑定或元组显示'},
        {precedence: '22', operator: '[expression,...]', description: '列表显示'},
        {precedence: '23', operator: '{key:datum,...}', description: '字典显示'},
        {precedence: '24', operator: '"expression,..."', description: '字符串转换'}
    ];

    $(document).ready(function () {
        $('#javaOperator').populateGrid({
            headers: [
                {header: '优先级', name: 'precedence'},
                {header: '运算符', name: 'operator'},
                {header: '结合性', name: 'associativity'}
            ],
            rowGroup: 1
        }, javaOperatorData);
    });

    $(document).ready(function () {
        $('#CPlusOperator').populateGrid({
            headers: [
                {header: '优先级', name: 'precedence'},
                {header: '运算符', name: 'operator'},
                {header: '结合性', name: 'associativity'}
            ],
            rowGroup: 1
        }, C$OperatorData);
    });

    $(document).ready(function () {
        $('#COperator').populateGrid({
            headers: [
                {header: '优先级', name: 'precedence'},
                {header: '运算符', name: 'operator'},
                {header: '描述', name: 'description'} ,
                {header: '结合性', name: 'associativity'}
            ],
            rowGroup: 1
        }, COperatorData);
    });

    $(document).ready(function () {
        $('#phpaOperator').populateGrid({
            headers: [
                {header: '优先级', name: 'precedence'},
                {header: '运算符', name: 'operator'},
                {header: '描述', name: 'description'} ,
                {header: '结合性', name: 'associativity'}
            ],
            rowGroup: 1
        }, phpaOperatorData);
    });

    $(document).ready(function () {
        $('#pythonOperator').populateGrid({
            headers: [
                {header: '优先级', name: 'precedence'},
                {header: '运算符', name: 'operator'},
                {header: '描述', name: 'description'}
            ],
            rowGroup: 1
        }, pythonOperatorData);
    });
})
(jQuery);
