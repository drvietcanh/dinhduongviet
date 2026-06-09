import subprocess
r = subprocess.run(['node', '-e', 'try{require.resolve("satori");console.log("satori:YES")}catch(e){console.log("satori:NO")};try{require.resolve("@resvg/resvg-js");console.log("resvg:YES")}catch(e){console.log("resvg:NO")};try{require.resolve("sharp");console.log("sharp:YES")}catch(e){console.log("sharp:NO")};try{require.resolve("@vercel/og");console.log("vercel-og:YES")}catch(e){console.log("vercel-og:NO")}'], capture_output=True, text=True, shell=True)
print(r.stdout)
print(r.stderr[:500] if r.stderr else 'no stderr')
