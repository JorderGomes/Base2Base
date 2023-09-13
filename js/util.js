

/*Funï¿½ï¿½o Pai de Mascaras*/
function Mascara(o, f) {
        v_obj = o
        v_fun = f
        setTimeout("execmascara()", 1)
}

/*Funï¿½ï¿½o que Executa os objetos*/
function execmascara() {
        v_obj.value = v_fun(v_obj.value)
}

/*Funï¿½ï¿½o que Determina as expressï¿½es regulares dos objetos*/
function leech(v) {
        v = v.replace(/o/gi, "0")
        v = v.replace(/i/gi, "1")
        v = v.replace(/z/gi, "2")
        v = v.replace(/e/gi, "3")
        v = v.replace(/a/gi, "4")
        v = v.replace(/s/gi, "5")
        v = v.replace(/t/gi, "7")
        return v
}

/*Funï¿½ï¿½o que permite apenas numeros*/
function IntegerInt(v) {
        if (v == '-') return v;
        if (v.match("-")) {
                mod = "-";
        } else {
                mod = "";
        }
        v = v.replace(/\D/g, "")
        if (v)
                v = parseInt(v) // para tirar zeros a esquerda
        //if(v=='NaN')
        //  v = '';
        v = ((v != 0) ? mod : '') + v
        //alert( v );
        return v
}

/*Funï¿½ï¿½o que permite apenas numeros*/
function Integer(v) {
        return v.replace(/\D/g, "")
}

/*Function that allow only binary numbers*/
function Binary(v) {
        v = v.replace(/[^0-1]/g, "");
        return v
}

/*Function that allow only hexadecimal numbers*/
function Hexadecimal(v) {
        v = v.replace(/[^0-9A-Fa-f]/g, "");
        return v
}

/*Function that allow only Octal numbers*/
function Octal(v) {
        v = v.replace(/[^0-7]/g, "");
        return v
}

/*Funï¿½ï¿½o que padroniza telefone (11) 41841241 ou 418412410 (9 dig.)*/
function Telefone(v) {
        v = v.replace(/\D/g, "")
        v = v.replace(/^(\d\d)(\d)/g, "($1) $2")
        /*v=v.replace(/(\d{4})(\d)/,"$1-$2")      */
        v = v.substr(0, 14);
        return v
}

/*Funï¿½ï¿½o que padroniza telefone (11) 41841241*/
function TelefoneCall(v) {
        v = v.replace(/\D/g, "")
        v = v.replace(/^(\d\d)(\d)/g, "($1) $2")
        return v
}

/*Funï¿½ï¿½o que padroniza CPF*/
function Cpf(v) {
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

        v = v.substring(0, 14)

        return v
}

/*Funï¿½ï¿½o que padroniza CEP*/
function Cep(v) {
        v = v.replace(/\D/g, "")
        v = v.replace(/D/g, "")
        v = v.replace(/^([0-9]{5})(\d)/, "$1-$2")
        v = v.substr(0, 9);
        return v
}

/*Funï¿½ï¿½o que padroniza CNPJ*/
function Cnpj(v) {
        v = v.replace(/\D/g, "")
        v = v.replace(/^(\d{2})(\d)/, "$1.$2")
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
        v = v.replace(/(\d{4})(\d)/, "$1-$2")
        v = v.substring(0, 18)
        return v
}

/*Funï¿½ï¿½o que permite apenas numeros Romanos*/
function Romanos(v) {
        v = v.toUpperCase()
        v = v.replace(/[^IVXLCDM]/g, "")

        while (v.replace(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/, "") != "")
                v = v.replace(/.$/, "")
        return v
}

/*Funï¿½ï¿½o que padroniza o Site*/
function Site(v) {
        v = v.replace(/^http:\/\/?/, "")
        dominio = v
        caminho = ""
        if (v.indexOf("/") > -1)
                dominio = v.split("/")[0]
        caminho = v.replace(/[^\/]*/, "")
        dominio = dominio.replace(/[^\w\.\+-:@]/g, "")
        caminho = caminho.replace(/[^\w\d\+-@:\?&=%\(\)\.]/g, "")
        caminho = caminho.replace(/([\?&])=/, "$1")
        if (caminho != "") dominio = dominio.replace(/\.+$/, "")
        v = "http://" + dominio + caminho
        return v
}

/*Funï¿½ï¿½o que padroniza DATA*/
function Data(v) {
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d{2})(\d)/, "$1/$2")
        v = v.replace(/(\d{2})(\d)/, "$1/$2")
        v = v.substr(0, 10)
        return v
}

/*Funï¿½ï¿½o que padroniza HOra*/
function Hora(v) {
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d{2})(\d)/, "$1:$2")
        v = v.substr(0, 5);
        return v
}

/*Funcaoo que padroniza Hora sem limitar a qtd de horas com possibilidade de incluir mais de 100horas*/
function Horas(v) {
        v = v.replace(/\D/g, "")
        // digitou? entao tirar o ultim zero a esquerda
        if (v.substr(0, 1) == '0') {
                v = v.substr(1);
        }
        // colocar zeros a esquerda
        while (v.length < 4) {
                v = '0' + v;
        }
        v = v.replace(/(\d{2})(\d)/, "$1:$2")
        v = v.substr(0, 5);
        return v
}

/*Funcaoo que padroniza Hora sem limitar a qtd de horas com possibilidade de incluir mais de 100horas*/
function HoraMaisDeCem(v) {
        v = v.replace(/\D/g, "")
        // digitou? entao tirar o ultim zero a esquerda
        if (v.substr(0, 1) == '0') {
                v = v.substr(1);
        }
        // colocar zeros a esquerda
        while (v.length < 5) {
                v = '0' + v;
        }
        v = v.replace(/(\d{3})(\d)/, "$1:$2")
        v = v.substr(0, 6);
        return v
}

/*Funï¿½ï¿½o que padroniza valor monï¿½tario*/
function Valor(v) {
        v = v.replace(/\D/g, "") //Remove tudo o que nï¿½o ï¿½ dï¿½gito
        v = v.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/, "$1.$2");
        //v=v.replace(/(\d{3})(\d)/g,"$1,$2")
        v = v.replace(/(\d)(\d{2})$/, "$1.$2") //Coloca ponto antes dos 2 ï¿½ltimos digitos
        return v
}

/*FunÃ§Ã£o que padroniza valor monÃ©tario*/
function Valor_pt(v) {
        v = v.replace(/\D/g, "") //Remove tudo o que nÃ£o Ã© dÃ­gito
        // retirar os zeros a esquerda
        while (v.substr(0, 1) == '0') //alert (v.length);
                v = v.substr(1, v.length - 1);
        // colocar os zeros a esquerda
        while (v.length < 3)
                v = '0' + v;

        //v=v.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/,"$1,$2");
        v = v.replace(/(\d)(\d{1,2})$/, "$1,$2") //Coloca ponto antes dos 2 Ãºltimos digitos
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")

        return v
}

/*FunÃ§Ã£o que padroniza valor monÃ©tario*/
function Valor_pt1(v) {
        v = v.replace(/\D/g, "") //Remove tudo o que nÃ£o Ã© dÃ­gito
        // retirar os zeros a esquerda
        while (v.substr(0, 1) == '0') //alert (v.length);
                v = v.substr(1, v.length - 1);
        // colocar os zeros a esquerda
        while (v.length < 2)
                v = '0' + v;

        //v=v.replace(/^([0-9]{3}\.?){3}-[0-9]{2}$/,"$1,$2");
        v = v.replace(/(\d)(\d{1,1})$/, "$1,$2") //Coloca ponto antes dos 2 Ãºltimos digitos
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")
        v = v.replace(/(\d{1,})(\d{3})/g, "$1.$2")

        return v
}

/*Funï¿½ï¿½o que padroniza Area*/
function Area(v) {
        v = v.replace(/\D/g, "")
        v = v.replace(/(\d)(\d{2})$/, "$1.$2")
        return v

}



function validaData(dia, mes, ano) {
        // fonte: http://www.portaleducacao.com.br/informatica/artigos/6941/validando-data-com-javascript#ixzz2ZCoNF0D1
        //Verifica se o ano estï¿½ correto
        if (ano.length == 4 && ano > 1900 && ano < 2100) {
                // Verificando o intervalo permitido para os valores dos meses e dias
                if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12) {
                        // Verifica os meses que posuem dia 30 dias
                        if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {

                                return false;
                        }
                        // caso seja mï¿½s 2 verifica se o ano ï¿½ bissexto
                        if (mes == 2) {
                                //se for bissexto
                                if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
                                        // Se for bissexto pode o dia ser no mï¿½ximo 29
                                        if (dia > 29)
                                                return false;
                                        // se nï¿½o for bisexto o dia pode ser no mï¿½ximo 28
                                } else if (dia > 28) {

                                        return false;
                                }
                        }
                } else {

                        return false;
                }
                // Data vï¿½lida
                return true;
        }
        else {
                return false;
        }
}