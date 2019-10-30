'use strict';

/* 
* 参数说明： 
* @param {Number|String} number：要格式化的数字,必传
* @param {String} currencySymbol：千分位符号,选填(默认值'¥')
* @param {Number} decimals：保留几位小数,选填(默认值2)
* @param {String} decPoint：小数点符号,选填(默认值'.')
* @param {String} thousandsSep：千分位符号,选填(默认值'')
* */
var currencyFormat = function currencyFormat(number, currencySymbol, decimals, decPoint, thousandsSep) {
  currencySymbol = currencySymbol || '¥';
  decimals = decimals || 2;
  decPoint = decPoint || '.';
  thousandsSep = thousandsSep || '';
  var regexp = getRegExp('[^0-9+-Ee.]', 'g');
  number = (number + '').replace(regexp, '');
  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      s = '',
      toFixedFix = function toFixedFix(n, prec) {
    var k = Math.pow(10, prec);
    return '' + (Math.ceil((n * k).toFixed(prec)) / k).toFixed(prec);
  };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

  if (thousandsSep) {
    var reg = getRegExp('(-?\d+)(\d{3})');
    while (reg.test(s[0])) {
      s[0] = s[0].replace(reg, "$1" + thousandsSep + "$2");
    }
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    var array = [];
    array.length = prec - s[1].length + 1;
    s[1] += array.join('0');
  }
  return currencySymbol + ' ' + s.join(decPoint);
};

module.exports = {
  currencyFormat: currencyFormat
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5qcyJdLCJuYW1lcyI6WyJjdXJyZW5jeUZvcm1hdCIsIm51bWJlciIsImN1cnJlbmN5U3ltYm9sIiwiZGVjaW1hbHMiLCJkZWNQb2ludCIsInRob3VzYW5kc1NlcCIsInJlZ2V4cCIsImdldFJlZ0V4cCIsInJlcGxhY2UiLCJuIiwiaXNGaW5pdGUiLCJwcmVjIiwiTWF0aCIsImFicyIsInMiLCJ0b0ZpeGVkRml4IiwiayIsInBvdyIsImNlaWwiLCJ0b0ZpeGVkIiwicm91bmQiLCJzcGxpdCIsInJlZyIsInRlc3QiLCJsZW5ndGgiLCJhcnJheSIsImpvaW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7OztBQVFBLElBQUlBLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBVUMsTUFBVixFQUFrQkMsY0FBbEIsRUFBa0NDLFFBQWxDLEVBQTRDQyxRQUE1QyxFQUFzREMsWUFBdEQsRUFBb0U7QUFDckZILG1CQUFpQkEsa0JBQWtCLEdBQW5DO0FBQ0FDLGFBQVdBLFlBQVksQ0FBdkI7QUFDQUMsYUFBV0EsWUFBWSxHQUF2QjtBQUNBQyxpQkFBZUEsZ0JBQWdCLEVBQS9CO0FBQ0EsTUFBSUMsU0FBU0MsVUFBVSxhQUFWLEVBQXlCLEdBQXpCLENBQWI7QUFDQU4sV0FBUyxDQUFDQSxTQUFTLEVBQVYsRUFBY08sT0FBZCxDQUFzQkYsTUFBdEIsRUFBOEIsRUFBOUIsQ0FBVDtBQUNBLE1BQUlHLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxNQUFWLENBQUQsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBQ0EsTUFBbEM7QUFBQSxNQUNFVSxPQUFPLENBQUNELFNBQVMsQ0FBQ1AsUUFBVixDQUFELEdBQXVCLENBQXZCLEdBQTJCUyxLQUFLQyxHQUFMLENBQVNWLFFBQVQsQ0FEcEM7QUFBQSxNQUVFVyxJQUFJLEVBRk47QUFBQSxNQUdFQyxhQUFhLFNBQWJBLFVBQWEsQ0FBVU4sQ0FBVixFQUFhRSxJQUFiLEVBQW1CO0FBQzlCLFFBQUlLLElBQUlKLEtBQUtLLEdBQUwsQ0FBUyxFQUFULEVBQWFOLElBQWIsQ0FBUjtBQUNBLFdBQU8sS0FBSyxDQUFDQyxLQUFLTSxJQUFMLENBQVUsQ0FBQ1QsSUFBSU8sQ0FBTCxFQUFRRyxPQUFSLENBQWdCUixJQUFoQixDQUFWLElBQW1DSyxDQUFwQyxFQUF1Q0csT0FBdkMsQ0FBK0NSLElBQS9DLENBQVo7QUFDRCxHQU5IOztBQVFBRyxNQUFJLENBQUNILE9BQU9JLFdBQVdOLENBQVgsRUFBY0UsSUFBZCxDQUFQLEdBQTZCLEtBQUtDLEtBQUtRLEtBQUwsQ0FBV1gsQ0FBWCxDQUFuQyxFQUFrRFksS0FBbEQsQ0FBd0QsR0FBeEQsQ0FBSjs7QUFFQSxNQUFJaEIsWUFBSixFQUFrQjtBQUNoQixRQUFJaUIsTUFBTWYsVUFBVSxnQkFBVixDQUFWO0FBQ0EsV0FBT2UsSUFBSUMsSUFBSixDQUFTVCxFQUFFLENBQUYsQ0FBVCxDQUFQLEVBQXVCO0FBQ3JCQSxRQUFFLENBQUYsSUFBT0EsRUFBRSxDQUFGLEVBQUtOLE9BQUwsQ0FBYWMsR0FBYixFQUFrQixPQUFPakIsWUFBUCxHQUFzQixJQUF4QyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLENBQUNTLEVBQUUsQ0FBRixLQUFRLEVBQVQsRUFBYVUsTUFBYixHQUFzQmIsSUFBMUIsRUFBZ0M7QUFDOUJHLE1BQUUsQ0FBRixJQUFPQSxFQUFFLENBQUYsS0FBUSxFQUFmO0FBQ0EsUUFBSVcsUUFBUSxFQUFaO0FBQ0FBLFVBQU1ELE1BQU4sR0FBZWIsT0FBT0csRUFBRSxDQUFGLEVBQUtVLE1BQVosR0FBcUIsQ0FBcEM7QUFDQVYsTUFBRSxDQUFGLEtBQVFXLE1BQU1DLElBQU4sQ0FBVyxHQUFYLENBQVI7QUFDRDtBQUNELFNBQU94QixpQkFBaUIsR0FBakIsR0FBdUJZLEVBQUVZLElBQUYsQ0FBT3RCLFFBQVAsQ0FBOUI7QUFDRCxDQS9CSDs7QUFpQ0V1QixPQUFPQyxPQUFQLEdBQWlCO0FBQ2Y1QixrQkFBZ0JBO0FBREQsQ0FBakIiLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4qIOWPguaVsOivtOaYju+8miBcbiogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBudW1iZXLvvJropoHmoLzlvI/ljJbnmoTmlbDlrZcs5b+F5LygXG4qIEBwYXJhbSB7U3RyaW5nfSBjdXJyZW5jeVN5bWJvbO+8muWNg+WIhuS9jeespuWPtyzpgInloaso6buY6K6k5YC8J8KlJylcbiogQHBhcmFtIHtOdW1iZXJ9IGRlY2ltYWxz77ya5L+d55WZ5Yeg5L2N5bCP5pWwLOmAieWhqyjpu5jorqTlgLwyKVxuKiBAcGFyYW0ge1N0cmluZ30gZGVjUG9pbnTvvJrlsI/mlbDngrnnrKblj7cs6YCJ5aGrKOm7mOiupOWAvCcuJylcbiogQHBhcmFtIHtTdHJpbmd9IHRob3VzYW5kc1NlcO+8muWNg+WIhuS9jeespuWPtyzpgInloaso6buY6K6k5YC8JycpXG4qICovXG52YXIgY3VycmVuY3lGb3JtYXQgPSBmdW5jdGlvbiAobnVtYmVyLCBjdXJyZW5jeVN5bWJvbCwgZGVjaW1hbHMsIGRlY1BvaW50LCB0aG91c2FuZHNTZXApIHtcbiAgICBjdXJyZW5jeVN5bWJvbCA9IGN1cnJlbmN5U3ltYm9sIHx8ICfCpSc7XG4gICAgZGVjaW1hbHMgPSBkZWNpbWFscyB8fCAyO1xuICAgIGRlY1BvaW50ID0gZGVjUG9pbnQgfHwgJy4nO1xuICAgIHRob3VzYW5kc1NlcCA9IHRob3VzYW5kc1NlcCB8fCAnJztcbiAgICB2YXIgcmVnZXhwID0gZ2V0UmVnRXhwKCdbXjAtOSstRWUuXScsICdnJyk7XG4gICAgbnVtYmVyID0gKG51bWJlciArICcnKS5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuICAgIHZhciBuID0gIWlzRmluaXRlKCtudW1iZXIpID8gMCA6ICtudW1iZXIsXG4gICAgICBwcmVjID0gIWlzRmluaXRlKCtkZWNpbWFscykgPyAwIDogTWF0aC5hYnMoZGVjaW1hbHMpLFxuICAgICAgcyA9ICcnLFxuICAgICAgdG9GaXhlZEZpeCA9IGZ1bmN0aW9uIChuLCBwcmVjKSB7XG4gICAgICAgIHZhciBrID0gTWF0aC5wb3coMTAsIHByZWMpXG4gICAgICAgIHJldHVybiAnJyArIChNYXRoLmNlaWwoKG4gKiBrKS50b0ZpeGVkKHByZWMpKSAvIGspLnRvRml4ZWQocHJlYylcbiAgICAgIH07XG4gIFxuICAgIHMgPSAocHJlYyA/IHRvRml4ZWRGaXgobiwgcHJlYykgOiAnJyArIE1hdGgucm91bmQobikpLnNwbGl0KCcuJyk7XG4gIFxuICAgIGlmICh0aG91c2FuZHNTZXApIHtcbiAgICAgIHZhciByZWcgPSBnZXRSZWdFeHAoJygtP1xcZCspKFxcZHszfSknKTtcbiAgICAgIHdoaWxlIChyZWcudGVzdChzWzBdKSkge1xuICAgICAgICBzWzBdID0gc1swXS5yZXBsYWNlKHJlZywgXCIkMVwiICsgdGhvdXNhbmRzU2VwICsgXCIkMlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlmICgoc1sxXSB8fCAnJykubGVuZ3RoIDwgcHJlYykge1xuICAgICAgc1sxXSA9IHNbMV0gfHwgJyc7XG4gICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgIGFycmF5Lmxlbmd0aCA9IHByZWMgLSBzWzFdLmxlbmd0aCArIDE7XG4gICAgICBzWzFdICs9IGFycmF5LmpvaW4oJzAnKTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbmN5U3ltYm9sICsgJyAnICsgcy5qb2luKGRlY1BvaW50KTtcbiAgfVxuICBcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY3VycmVuY3lGb3JtYXQ6IGN1cnJlbmN5Rm9ybWF0XG4gIH0iXX0=