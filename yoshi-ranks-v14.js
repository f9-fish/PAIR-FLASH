/* Yoshi.Lab rank thresholds: keep original tier boundaries. */
window.YoshiRanks=(function(){
 const tiers=[{name:'ブロンズ',min:0,color:'#c98c60'},{name:'シルバー',min:500,color:'#c3d5ea'},{name:'ゴールド',min:1500,color:'#f4c04d'},{name:'プラチナ',min:3500,color:'#7ad5e8'},{name:'ダイヤモンド',min:7000,color:'#7aafff'},{name:'マスター',min:12000,color:'#bb89ff'},{name:'レディアント',min:12000,color:'#ffd779'}];
 function get(xp,gradePosition=-1){xp=Math.max(0,Number(xp)||0);let tier=0;for(let i=5;i>=0;i--){if(xp>=tiers[i].min){tier=i;break;}}
 if(tier===5&&gradePosition>=0&&gradePosition<10)tier=6;
 let division='',min=tiers[tier].min,next=null,nextName='';
 if(tier<5){const end=tiers[tier+1].min,width=end-min;const second=min+Math.ceil(width/3),first=min+Math.ceil(2*width/3);
 division=xp<second?'Ⅲ':xp<first?'Ⅱ':'Ⅰ';const nextMin=xp<second?second:xp<first?first:end;
 next=nextMin;nextName=xp<second?tiers[tier].name+' Ⅱ':xp<first?tiers[tier].name+' Ⅰ':tiers[tier+1].name+' Ⅲ';min=xp<second?min:xp<first?second:first;
 }
 return {tier,name:tiers[tier].name+(division?' '+division:''),division,color:tiers[tier].color,min,next,nextName,xp};}
 return {tiers,get};
})();
