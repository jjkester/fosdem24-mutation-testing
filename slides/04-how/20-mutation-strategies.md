### Mutation strategies

Placing mutations into source code

---

<div class="kc-columns kc-gap5">

<div class="fragment semi-fade-out" data-fragment-index="1">

#### Source code mutation

![Source code mutation](/img/source-code-mutation.svg)

- ✅ Precise
- ✅ Easy
- ❌ Slow

</div>
<div class="fragment custom semi-fade-in" data-fragment-index="1">

#### Byte code mutation

![Byte code mutation](/img/byte-code-mutation.svg)

- ✅ Fast...ish
- ❌ False positives
- ❌ Complicated

</div>

</div>

---

### Mutant schemata

<div class="fragment">

Generate mutants based on source code, but compile once

![Mutant schemata](/img/mutant-schemata-mutation.svg)

* ✅ Precise
* ✅ Fast
* 🟡 Complicated (but manageable)

Roland H. Untch, A. Jefferson Offutt, and Mary Jean Harrold. 1993. Mutation analysis using mutant schemata. SIGSOFT Softw. Eng. Notes 18, 3 (July 1993), 139–148. DOI: 10.1145/174146.154265.
<!-- .element: class="kc-smallest" -->

</div>

Note: Relatively new!
