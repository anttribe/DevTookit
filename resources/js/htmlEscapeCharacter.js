/**
 * Created by zhaoyong on 2014/10/27.
 * Html转义字符
 */
(function ($) {
    $(document).ready(function () {
        var htmlEscapeCharacterData = [
            {character: '"', decimal: '&#34;', escape: '&quot;'}
        ];
        $('#htmlEscapeCharacter').populateGrid({headers: [
            {header: '字符', name: 'character'},
            {header: '十进制', name: 'decimal'},
            {header: '转义字符', name: 'escape'}
        ], rowGroup: 3}, htmlEscapeCharacterData);
    });
})(jQuery);
