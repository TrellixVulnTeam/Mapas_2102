function e(e){return e&&e.__esModule?e.default:e}var r,t=e(r=L).map("map").setView([43.34578351332376,-1.7965434243182008],11);document.getElementById("Miubicacion").addEventListener("click",(function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){t.setView([e.coords.latitude,e.coords.longitude],14)}))})),e(r).tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',maxZoom:18}).addTo(t);var a=e(r).marker([43.337980156287806,-1.7889131039719477]).addTo(t);a.bindPopup("<b>Irun</b><br>Ofertas Irun").openPopup();var o=e(r).marker([43.370869413041085,-1.8000573608023607]).addTo(t);o.bindPopup("<b>Hondarribi</b><br>Ofertas Hondarribi").openPopup();var n=e(r).marker([43.31310137742069,-1.9011304116311554]).addTo(t);n.bindPopup("<b>Errenteria</b><br>Ofertas Errenteria").openPopup();var i=e(r).marker([43.318295831830575,-1.9809033453194742]).addTo(t);i.bindPopup("<b>Donostia</b><br>Ofertas Donostia").openPopup(),a.addEventListener("click",(function(){filtrar(1)})),n.addEventListener("click",(function(){filtrar(2)})),o.addEventListener("click",(function(){filtrar(3)})),i.addEventListener("click",(function(){filtrar(4)}));
//# sourceMappingURL=index.944bcd94.js.map
