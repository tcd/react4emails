(function(document) {
    "use strict"

    var LightTableFilter = (function(Arr) {

        var _input

        function _onInputEvent(e) {
            _input = e.target
            var tables = document.getElementsByClassName(_input.getAttribute("data-table"))
            Arr.forEach.call(tables, function(table) {
                Arr.forEach.call(table.tBodies, function(tbody) {
                    Arr.forEach.call(tbody.rows, _filter)
                })
            })
        }

        function _filter(row) {
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase()
            row.style.display = text.indexOf(val) === -1 ? "none" : "table-row"
        }

        return {
            init: function() {
                var inputs = document.getElementsByClassName("light-table-filter")
                Arr.forEach.call(inputs, function(input) {
                    input.oninput = _onInputEvent
                })
            },
        }
    })(Array.prototype)

    document.addEventListener("readystatechange", function() {
        if (document.readyState === "complete") {
            LightTableFilter.init()

            function querySt(ji) {
                var hu = window.location.search.substring(1)
                var gy = hu.split("&")
                for (var i=0;i<gy.length;i++) {
                    var ft = gy[i].split("=")
                    if (ft[0] == ji) {
                        return ft[1]
                    }
                }
            }
            var filterValue = querySt("filter")
            if (filterValue !== undefined) {
                document.getElementById("table-filter").value = filterValue
                var evt = document.createEvent("HTMLEvents")
                evt.initEvent("input", false, true)
                document.getElementById("table-filter").dispatchEvent(evt)
            }
        }
    })

})(document)
