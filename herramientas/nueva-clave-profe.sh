#!/bin/bash
# Cambia la clave del panel del profe del portal (botón 🔧). La pide aquí, en TU terminal
# (no se ve al teclearla), y escribe en js/config.js solo su huella SHA-256: la clave no
# sale de tu máquina, ni se imprime, ni entra en git. Luego, commit y push como siempre.
#
#   bash herramientas/nueva-clave-profe.sh
#
# Como el portal es una web estática, la huella se ve en el código: con una clave corta,
# alguien podría adivinarla probando. Por eso pide 16 caracteres o más: vale una frase.
set -euo pipefail
export LC_ALL=C
AQUI="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CONFIG="$AQUI/js/config.js"
[ -f "$CONFIG" ] || { echo "no encuentro $CONFIG" >&2; exit 1; }
grep -q '^  claveProfeSha256: "[0-9a-f]*",$' "$CONFIG" || { echo "config.js no tiene la línea claveProfeSha256 esperada: no toco nada" >&2; exit 1; }
{ : </dev/tty; } 2>/dev/null || { echo "necesito una terminal para pedir la clave" >&2; exit 1; }

read -rsp "Clave nueva del profe (16 o más, sin tildes ni ñ; vale una frase): " c1 </dev/tty; echo >&2
read -rsp "Otra vez: " c2 </dev/tty; echo >&2
[ "$c1" = "$c2" ] || { echo "no coinciden: no he cambiado nada" >&2; exit 1; }
[ "${#c1}" -ge 16 ] || { echo "demasiado corta (${#c1}): 16 o más. No he cambiado nada" >&2; exit 1; }
[[ "$c1" =~ ^[\ -~]+$ ]] || { echo "solo letras sin tildes, números, espacios y signos normales (sin ñ ni €): no he cambiado nada" >&2; exit 1; }

HUELLA="$(printf '%s' "$c1" | sha256sum | cut -d' ' -f1)"
unset c1 c2
[[ "$HUELLA" =~ ^[0-9a-f]{64}$ ]] || { echo "no salió una huella válida" >&2; exit 1; }
sed -i "s/^  claveProfeSha256: \"[0-9a-f]*\",\$/  claveProfeSha256: \"$HUELLA\",/" "$CONFIG"
echo "hecho: js/config.js lleva la huella de la clave nueva (la clave no se ha guardado en ningún sitio)." >&2
echo "Apúntala en tu gestor de contraseñas. Luego: git add js/config.js && git commit && git push" >&2
