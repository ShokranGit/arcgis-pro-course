// Floating header clones for long tables.
//
// `position: sticky` on a <th> inside a <table> does not reliably keep
// the header text painted in place once the table has extra wrapper
// markup (rowspans, scroll wrappers, etc.), so instead this clones the
// header row into its own small fixed-position table and swaps it in
// once the real header scrolls out from under the site's top bar.
(function () {
    var SELECTOR = '.topics-table table, .schedule-table table, .grading-table table';
    var trackers = [];
    var rafPending = false;

   function headerHeight() {
         var header = document.querySelector('.md-header');
         return header ? header.getBoundingClientRect().height : 0;
   }

   function wrapperClass(table) {
         var wrapper = table.closest('.topics-table, .schedule-table, .grading-table');
         return wrapper ? wrapper.className : '';
   }

   function buildClone(table) {
         var thead = table.querySelector('thead');
         if (!thead) {
                 return null;
         }

      var wrap = document.createElement('div');
         wrap.className = 'md-typeset floating-thead-wrap ' + wrapperClass(table);
         wrap.style.position = 'fixed';
         wrap.style.overflow = 'hidden';
         wrap.style.display = 'none';
         wrap.setAttribute('aria-hidden', 'true');

      var cloneTable = document.createElement('table');
         cloneTable.style.tableLayout = 'fixed';
         cloneTable.style.margin = '0';
         cloneTable.style.borderCollapse = 'separate';

      var cloneThead = thead.cloneNode(true);
         cloneTable.appendChild(cloneThead);
         wrap.appendChild(cloneTable);
         document.body.appendChild(wrap);

      return {
              table: table,
              thead: thead,
              wrap: wrap,
              cloneTable: cloneTable,
              cloneThead: cloneThead
      };
   }

   function syncWidths(t) {
         var rect = t.table.getBoundingClientRect();
         var originalCells = t.thead.querySelectorAll('th');
         var cloneCells = t.cloneThead.querySelectorAll('th');
         originalCells.forEach(function (cell, i) {
                 var w = cell.getBoundingClientRect().width;
                 var c = cloneCells[i];
                 if (c) {
                           c.style.setProperty('width', w + 'px', 'important');
                           c.style.setProperty('min-width', w + 'px', 'important');
                           c.style.setProperty('max-width', w + 'px', 'important');
                 }
         });
         t.wrap.style.left = rect.left + 'px';
         t.wrap.style.width = rect.width + 'px';
         t.cloneTable.style.width = rect.width + 'px';
   }

   function update(t) {
         var top = headerHeight();
         var theadRect = t.thead.getBoundingClientRect();
         var tableRect = t.table.getBoundingClientRect();
         var shouldShow = theadRect.top < top && tableRect.bottom > top + theadRect.height;
         if (shouldShow) {
                 syncWidths(t);
                 t.wrap.style.top = top + 'px';
                 t.wrap.style.display = 'block';
         } else {
                 t.wrap.style.display = 'none';
         }
   }

   function updateAll() {
         trackers.forEach(update);
         rafPending = false;
   }

   function requestUpdate() {
         if (!rafPending) {
                 rafPending = true;
                 window.requestAnimationFrame(updateAll);
         }
   }

   function init() {
         document.querySelectorAll(SELECTOR).forEach(function (table) {
                 var t = buildClone(table);
                 if (t) {
                           trackers.push(t);
                 }
         });
         if (!trackers.length) {
                 return;
         }
         updateAll();
         window.addEventListener('scroll', requestUpdate, { passive: true });
         window.addEventListener('resize', requestUpdate);
   }

   if (document.readyState === 'loading') {
         document.addEventListener('DOMContentLoaded', init);
   } else {
         init();
   }
})();
