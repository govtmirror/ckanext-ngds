$("[name=title]").on("input",function(a){var b=$("[name=title]").val();b=b.trim();b=b.replace(/^-/,"");b=b.replace(/-$/,"");b=b.replace(/[^a-zA-Z0-9]/g,"-");b=b.replace(/-{2,}/g,"-");$("[name=name]").val(b.toLowerCase())});