// Module column merging (docs/lessons/index.md ".topics-table" and the
// course schedule tables in docs/courses/*.md ".schedule-table"): both
// repeat the same module name for every topic row. This merges
// consecutive rows that share a module into a single cell (using
// rowspan) so the name is written once, vertically centered, and tags
// each row with a "module-row-*" class so extra.css can tint the whole
// row group instead of drawing a per-row pill badge.
(function () {
  function moduleSlug(el) {
    var found = null;
    el.classList.forEach(function (cls) {
      if (cls.indexOf('module-') === 0 && cls !== 'module-badge') {
        found = cls.replace('module-', '');
      }
    });
    return found;
  }

 function mergeModuleColumn(table, colIndex) {
   var selector = 'td:nth-child(' + colIndex + ')';
   var rows = Array.from(table.querySelectorAll('tbody tr'));
   var i = 0;
   while (i < rows.length) {
     var cell = rows[i].querySelector(selector);
     if (!cell) {
       i += 1;
       continue;
     }
     var key = cell.textContent.trim();
     var j = i + 1;
     while (j < rows.length) {
       var nextCell = rows[j].querySelector(selector);
       if (!nextCell || nextCell.textContent.trim() !== key) {
         break;
       }
       j += 1;
     }

   if (j - i > 1) {
     cell.rowSpan = j - i;
     for (var k = i + 1; k < j; k++) {
       var extraCell = rows[k].querySelector(selector);
       if (!extraCell) {
         continue;
       }
       var anchor = extraCell.querySelector('[id]');
       if (anchor && anchor.id && !rows[k].id) {
         rows[k].id = anchor.id;
       }
       extraCell.remove();
     }
   }

   var badge = cell.querySelector('[class*="module-"]');
     var slug = badge ? moduleSlug(badge) : null;
     if (slug) {
       for (var m = i; m < j; m++) {
         rows[m].classList.add('module-row-' + slug);
       }
     }

   i = j;
   }
 }

 function enhanceTables() {
   document.querySelectorAll('.topics-table table').forEach(function (table) {
     mergeModuleColumn(table, 1);
   });
   document.querySelectorAll('.schedule-table table').forEach(function (table) {
     mergeModuleColumn(table, 3);
   });
 }

 if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', enhanceTables);
 } else {
   enhanceTables();
 }
})();
