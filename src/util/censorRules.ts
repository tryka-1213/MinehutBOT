import { ZALGO_REGEX } from './constants';

export enum CensorRuleType {
	Swear,
	CopyPasta,
	Invite,
	Spam,
	Zalgo,
}

const { Swear, CopyPasta, Invite, Spam, Zalgo } = CensorRuleType;

export const CENSOR_RULES = [
	{ rule: ZALGO_REGEX.toString(), type: Zalgo, enabled: true },
	{ rule: '\\b(horny)', type: Swear, enabled: true },
	{ rule: '\\b(boobs?)', type: Swear, enabled: true },
	{
		rule: '\\b(anal(?!(ysis|y(s|z)e|ytic(al|s)?|ogy)))',
		type: Swear,
		enabled: true,
	},
	{
		rule: '\\b(a(ss|\\$\\$)+(es)?(?![a-z]))',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(sl(u|e)t)', type: Swear, enabled: true },
	{ rule: '\\b(jerks)', type: Swear, enabled: true },
	{ rule: '\\b(brainfuck)', type: Swear, enabled: true },
	{ rule: '\\b(d(i|1|1|!)ck)', type: Swear, enabled: true },
	{
		rule: '\\b(s(e|3)x(?!(y|uality|ualities)))',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(bastard)', type: Swear, enabled: true },
	{ rule: '\\b(rape(ist)?)', type: Swear, enabled: true },
	{ rule: '\\b(douche)', type: Swear, enabled: true },
	{ rule: '\\b(yiff)', type: Swear, enabled: true },
	{ rule: '\\b(slag)', type: Swear, enabled: true },
	{ rule: '\\b(($|s|5)h(i|1|!)t)', type: Swear, enabled: true },
	{ rule: '\\b(twat)', type: Swear, enabled: true },
	{ rule: '\\b(testicles?)', type: Swear, enabled: true },
	{ rule: '\\b(p\\.?ussy)', type: Swear, enabled: true },
	{ rule: '\\b(hentai)', type: Swear, enabled: true },
	{
		rule:
			'\\b((n|/\\\\/)(1|i|!|e|3)(g|gg|bb|qq)(?!(otiate|otiation|otiator|otiable|lect(able|ed)?|ative))(?!(h|at))(a|3r|er)?)',
		type: Swear,
		enabled: true,
	},
	{
		rule: '\\b(c(o|0)ck(?!roach)(head|sucker)?)',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(tit(ties|s))', type: Swear, enabled: true },
	{ rule: '(.)(?=([a-z\\.]){17})', type: Spam, enabled: false },
	{
		rule: '\\b(f(\\.)?((uc|[uc]|vc)(k|q)|(uk|uc|\\.ck|(\\.|,)uck)))',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(intercourse)', type: Swear, enabled: true },
	{ rule: '\\b(cum)', type: Swear, enabled: true },
	{ rule: '\\b(anus)', type: Swear, enabled: true },
	{ rule: '\\b(dildo)', type: Swear, enabled: true },
	{
		rule: '\\b(retar(d(?!ant)|ted))',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(blowjob)', type: Swear, enabled: true },
	{ rule: '\\b(p(e|3)nn?is)', type: Swear, enabled: true },
	{ rule: '\\b(piss)', type: Swear, enabled: false },
	{ rule: '\\b(c(u)nt)', type: Swear, enabled: true },
	{ rule: '\\b(whore)', type: Swear, enabled: true },
	{ rule: '\\b(b(i|\\*)t?ch)', type: Swear, enabled: true },
	{ rule: '\\b(asshole)', type: Swear, enabled: true },
	{ rule: '\\b(prick)', type: Swear, enabled: true },
	{ rule: '\\b(fag(got)?)', type: Swear, enabled: true },
	{ rule: '\\b(vagina)', type: Swear, enabled: true },
	{ rule: '\\b(mibb(a|er))', type: Swear, enabled: true },
	{ rule: '\\b(porn(hub)?)', type: Swear, enabled: true },
	{ rule: '\\b(sperm)', type: Swear, enabled: true },
	{ rule: '\\b(aroused)', type: Swear, enabled: true },
	{ rule: '\\b(wanker)', type: Swear, enabled: true },
	{ rule: '\\b(gas( )?(the)?( )?jews)', type: Swear, enabled: true },
	{ rule: '\\b(hitler|nazi)', type: Swear, enabled: true },
	{ rule: '\\b(erection)', type: Swear, enabled: true },
	{ rule: '\\b(fisting)', type: Swear, enabled: true },
	{ rule: '\\b(motherfucker)', type: Swear, enabled: true },
	{
		rule: '\\b(masterbat(e|ion|or))',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(suicide)', type: Swear, enabled: true },
	{ rule: '\\b(wank)', type: Swear, enabled: true },
	{
		rule: '\\b(brazzerss?|youporn|spankbang|xvideos)',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(buttplug)', type: Swear, enabled: true },
	{ rule: '\\b(chingar)', type: Swear, enabled: true },
	{ rule: '\\b(marijuana|weed)', type: Swear, enabled: true },
	{ rule: '\\b(shilba)', type: Swear, enabled: true },
	{ rule: '\\b(d(i|y)ke)', type: Swear, enabled: true },
	{ rule: '\\b(beaner)', type: Swear, enabled: true },
	{ rule: '\\b(cyka)', type: Swear, enabled: true },
	{ rule: '\\b(blyat)', type: Swear, enabled: true },
	{ rule: '\\b(merde)', type: Swear, enabled: true },
	{
		rule: '\\s(\\[[a-z0-9]{8,}\\])$',
		type: Spam,
		enabled: false,
	},
	{ rule: '\\b(ddos)', type: Swear, enabled: false },
	{ rule: '卍', type: Swear, enabled: true },
	{ rule: '\\b((?<!s)kys)', type: Swear, enabled: true },
	{ rule: '\\b((bull?|horse)shit)', type: Swear, enabled: true },
	{ rule: '\\b(kanker)', type: Swear, enabled: true },
	{
		rule: '\\b((dip|dog)?(s|$)h(\\.|,)?(i|1|!)t)',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(naked)', type: Swear, enabled: false },
	{ rule: '\\b(cancer)', type: Swear, enabled: true },
	{ rule: '\\b(pp(?![a-z]))', type: Swear, enabled: true },
	{
		rule: '\\b(chupa mi polla|sut min pik)',
		type: Swear,
		enabled: true,
	},
	{
		rule: '[█゜▔゛▫■œ∑´®†¥¨ˆøπ¬˚∆˙©ƒ∂ßåΩ≈ç√∫˜µ]{8,}',
		type: Spam,
		enabled: true,
	},
	{ rule: '\\b(polidicks)', type: Swear, enabled: true },
	{ rule: '\\b(gayass)', type: Swear, enabled: true },
	{ rule: '\\b(p(a)?edo(file)?)', type: Swear, enabled: true },
	{
		type: Swear,
		enabled: true,
		rule: '\\b(LiquidBounce|Sigma|MoonX)',
	},
	{
		rule:
			'\\b(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])',
		type: Swear,
		enabled: true,
	},
	{
		rule:
			'\\b(n ?i ?g ?g ?e ?r|n ?i ?g ?g ?a|f ? u? c? k|s ?h ?i ?t|b ?i ?t ?c ?h ?(e ?)?s?|(?<!s)k ?y ?s)',
		type: Swear,
		enabled: true,
	},
	{ rule: '\\b(fk(?!dr)( off+)?)', type: Swear, enabled: true },
	{
		rule:
			'\\b((https?://)?(www.)?(discord.(gg|io|me|li)|discord(app)?.com/invite)/(?<invite>.+[a-z]))',
		type: Invite,
		enabled: true,
	},
	{
		rule: '\\b(reallybadword)',
		type: CopyPasta,
		enabled: true,
	},
	{
		rule: '\\b(Copy And Paste (Him|Her))',
		type: CopyPasta,
		enabled: true,
	},
	{
		rule: '\\b(This is (memedog|memecat|bob))',
		type: CopyPasta,
		enabled: true,
	},
	{
		rule: '\\b(Look out for (a|the) discord user)',
		type: CopyPasta,
		enabled: true,
	},
];