const sound = (prefix, ownerBot, botName) => {
        return `
「 *Tuki* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: rosse
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *SOUND*
  │
  └─ ❏ ${prefix}tts`
}
exports.sound = sound
