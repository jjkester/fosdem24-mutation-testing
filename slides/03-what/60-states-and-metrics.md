### Mutant states

- ✅ Killed
- 👽 Survived
- 🙈 No coverage <em class="fragment" data-fragment-index="1">&mdash; no tests are reaching the code</em>
- ⏳ Timeout <em class="fragment" data-fragment-index="1">&mdash; mutation caused an infinite loop</em>
- 💥 Runtime <em class="fragment" data-fragment-index="1">&mdash; mutation caused an exception</em>
- 💥 Compile <em class="fragment" data-fragment-index="1">&mdash; mutation resulted in invalid code</em>
- 🤥 Ignored <!-- .element class="fragment" data-fragment-index="2" -->

---

<!-- .slide: data-auto-animate -->

### Mutation score

Is the code tested adequately?

<div class="kc-flex kc-vertical-center kc-gap1" style="width: fit-content; margin: auto">

**Mutation score** =

<div>

M<sub>detected</sub>  
<!-- .element: style="text-align: center" -->

<hr>

M<sub>valid</sub>

<!-- .element: style="text-align: center" -->

</div>

&times; 100%

</div>

- M<sub>detected</sub> = M<sub>killed</sub> + M<sub>timeout</sub> = ✅ + ⏳
- M<sub>undetected</sub> = M<sub>survived</sub> + M<sub>no coverage</sub> = 👽 + 🙈
- M<sub>valid</sub> = M<sub>detected</sub> + M<sub>undetected</sub> = ✅ + ⏳ + 👽 + 🙈

<!-- .element: class="kc-smaller" -->

---

<!-- .slide: data-auto-animate -->

### Mutation score

Is the code _that is tested_ being tested adequately?

<div class="kc-flex kc-vertical-center kc-gap1" style="width: fit-content; margin: auto">

**Mutation score on covered code** =

<div>

M<sub>detected</sub>
<!-- .element: style="text-align: center" -->

<hr>

M<sub>covered</sub>

<!-- .element: style="text-align: center" -->

</div>

&times; 100%

</div>

- M<sub>detected</sub> = M<sub>killed</sub> + M<sub>timeout</sub> = ✅ + ⏳
- M<sub>undetected</sub> = M<sub>survived</sub> + M<sub>no coverage</sub> = 👽 + 🙈
- M<sub>covered</sub> = M<sub>detected</sub> + M<sub>survived</sub> = ✅ + ⏳ + 👽

<!-- .element: class="kc-smaller" -->

---

<!-- .slide: class="is-fancy1" -->

#### Not all mutants can be killed

While it is easy to _reach_ all your code, it is not possible to write a test case for every possible internal change of your program
