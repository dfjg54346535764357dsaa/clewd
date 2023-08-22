/*
* https://gitgud.io/ahsk/clewd
* https://github.com/h-a-s-k/clewd
*/"use strict";const{spawn:e}=require("node:child_process"),{relative:r,resolve:n,join:s,normalize:o}=require("node:path"),{writeFileSync:t,unlinkSync:a,existsSync:i}=require("node:fs"),c={win32:{x64:"clewd-superfetch-win-amd64.exe"},darwin:{x64:"clewd-superfetch-mac-amd64",arm64:"clewd-superfetch-linux-arm64"},linux:{arm64:"clewd-superfetch-linux-arm64",x64:"clewd-superfetch-linux-amd64"},android:{arm64:"clewd-superfetch-linux-arm64",x64:"clewd-superfetch-linux-amd64"}}[process.platform]?.[process.arch],l=""+o(n(__dirname,s(__dirname,"./bin/"+c))),d=[123,34,115,101,99,45,99,104,45,117,97,34,58,34,92,34,67,104,114,111,109,105,117,109,92,34,59,118,61,92,34,49,49,48,92,34,44,32,92,34,78,111,116,32,65,40,66,114,97,110,100,92,34,59,118,61,92,34,50,52,92,34,44,32,92,34,71,111,111,103,108,101,32,67,104,114,111,109,101,92,34,59,118,61,92,34,49,49,48,92,34,34,44,34,115,101,99,45,99,104,45,117,97,45,109,111,98,105,108,101,34,58,34,63,48,34,44,34,115,101,99,45,99,104,45,117,97,45,112,108,97,116,102,111,114,109,34,58,34,92,34,87,105,110,100,111,119,115,92,34,34,44,34,85,112,103,114,97,100,101,45,73,110,115,101,99,117,114,101,45,82,101,113,117,101,115,116,115,34,58,34,49,34,44,34,85,115,101,114,45,65,103,101,110,116,34,58,34,77,111,122,105,108,108,97,47,53,46,48,32,40,87,105,110,100,111,119,115,32,78,84,32,49,48,46,48,59,32,87,105,110,54,52,59,32,120,54,52,41,32,65,112,112,108,101,87,101,98,75,105,116,47,53,51,55,46,51,54,32,40,75,72,84,77,76,44,32,108,105,107,101,32,71,101,99,107,111,41,32,67,104,114,111,109,101,47,49,49,48,46,48,46,48,46,48,32,83,97,102,97,114,105,47,53,51,55,46,51,54,34,44,34,65,99,99,101,112,116,34,58,34,116,101,120,116,47,104,116,109,108,44,97,112,112,108,105,99,97,116,105,111,110,47,120,104,116,109,108,43,120,109,108,44,97,112,112,108,105,99,97,116,105,111,110,47,120,109,108,59,113,61,48,46,57,44,105,109,97,103,101,47,97,118,105,102,44,105,109,97,103,101,47,119,101,98,112,44,105,109,97,103,101,47,97,112,110,103,44,42,47,42,59,113,61,48,46,56,44,97,112,112,108,105,99,97,116,105,111,110,47,115,105,103,110,101,100,45,101,120,99,104,97,110,103,101,59,118,61,98,51,59,113,61,48,46,55,34,44,34,83,101,99,45,70,101,116,99,104,45,83,105,116,101,34,58,34,110,111,110,101,34,44,34,83,101,99,45,70,101,116,99,104,45,77,111,100,101,34,58,34,110,97,118,105,103,97,116,101,34,44,34,83,101,99,45,70,101,116,99,104,45,85,115,101,114,34,58,34,63,49,34,44,34,83,101,99,45,70,101,116,99,104,45,68,101,115,116,34,58,34,100,111,99,117,109,101,110,116,34,44,34,65,99,99,101,112,116,45,69,110,99,111,100,105,110,103,34,58,34,103,122,105,112,44,32,100,101,102,108,97,116,101,44,32,98,114,34,44,34,65,99,99,101,112,116,45,76,97,110,103,117,97,103,101,34,58,34,101,110,45,85,83,44,101,110,59,113,61,48,46,57,34,125],u=[91,34,45,45,99,105,112,104,101,114,115,32,84,76,83,95,65,69,83,95,49,50,56,95,71,67,77,95,83,72,65,50,53,54,44,84,76,83,95,65,69,83,95,50,53,54,95,71,67,77,95,83,72,65,51,56,52,44,84,76,83,95,67,72,65,67,72,65,50,48,95,80,79,76,89,49,51,48,53,95,83,72,65,50,53,54,44,69,67,68,72,69,45,69,67,68,83,65,45,65,69,83,49,50,56,45,71,67,77,45,83,72,65,50,53,54,44,69,67,68,72,69,45,82,83,65,45,65,69,83,49,50,56,45,71,67,77,45,83,72,65,50,53,54,44,69,67,68,72,69,45,69,67,68,83,65,45,65,69,83,50,53,54,45,71,67,77,45,83,72,65,51,56,52,44,69,67,68,72,69,45,82,83,65,45,65,69,83,50,53,54,45,71,67,77,45,83,72,65,51,56,52,44,69,67,68,72,69,45,69,67,68,83,65,45,67,72,65,67,72,65,50,48,45,80,79,76,89,49,51,48,53,44,69,67,68,72,69,45,82,83,65,45,67,72,65,67,72,65,50,48,45,80,79,76,89,49,51,48,53,44,69,67,68,72,69,45,82,83,65,45,65,69,83,49,50,56,45,83,72,65,44,69,67,68,72,69,45,82,83,65,45,65,69,83,50,53,54,45,83,72,65,44,65,69,83,49,50,56,45,71,67,77,45,83,72,65,50,53,54,44,65,69,83,50,53,54,45,71,67,77,45,83,72,65,51,56,52,44,65,69,83,49,50,56,45,83,72,65,44,65,69,83,50,53,54,45,83,72,65,34,44,34,34,44,34,45,45,104,116,116,112,50,34,44,34,45,45,104,116,116,112,50,45,110,111,45,115,101,114,118,101,114,45,112,117,115,104,34,44,34,45,45,102,97,108,115,101,45,115,116,97,114,116,34,44,34,45,45,99,111,109,112,114,101,115,115,101,100,34,44,34,45,45,116,108,115,118,49,46,50,34,44,34,45,45,110,111,45,110,112,110,34,44,34,45,45,97,108,112,115,34,44,34,45,45,116,108,115,45,112,101,114,109,117,116,101,45,101,120,116,101,110,115,105,111,110,115,34,44,34,45,45,99,101,114,116,45,99,111,109,112,114,101,115,115,105,111,110,32,98,114,111,116,108,105,34,44,34,45,45,108,111,99,97,116,105,111,110,34,93],m=(e=false)=>{if(!c||!i(l)){e&&console.warn(`superfetch [[31merr[0m] unavailable for ${process.platform}-${process.arch}\n`);return false}e&&console.log(`superfetch [[32minit[0m] ${c}\n`);return true},f=(r,n)=>{n.headers||(n.headers={});"string"!=typeof n.body&&n.body&&JSON.stringify(n.body);if(!m())return;const i=o(s(__dirname,"bin","cfg")),c=o(s(__dirname,"bin","pyld")),f=o(s(__dirname,"bin","hdr")),p=o(s(__dirname,"bin","ca"));let h={...{...JSON.parse(Buffer.from(d).toString()),...n.headers}};const w=Object.values(h);h=Object.keys(h).map(((e,r)=>`${e}: ${w[r]}`));const x=["--cacert "+p,"--config "+i,"--header @"+f,"--data @"+c],b=[...JSON.parse(Buffer.from(u).toString()),"-X "+(n.method||"GET")];t(i,b.join("\n"));t(c,n.body);t(f,h.join("\n"));return new Promise((n=>{const s=e(l,[...x,""+r],{shell:true,windowsHide:true,killSignal:"SIGKILL",detached:false});s.once("spawn",(()=>{n(s)}));s.once("error",(e=>{console.warn("superfetch [[31merr[0m]",e)}));s.once("close",(()=>{a(i);a(c);a(f);s.stdout.removeAllListeners();s.stderr.removeAllListeners()}));s.stderr.on("data",(()=>{}))}))};module.exports.Superfetch=f;module.exports.SuperfetchAvailable=m;module.exports.Binary=l;