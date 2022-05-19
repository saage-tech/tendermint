(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{778:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"proposer-based-time-first-draft"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposer-based-time-first-draft"}},[e._v("#")]),e._v(" Proposer-Based Time (first draft)")]),e._v(" "),o("h2",{attrs:{id:"current-bfttime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#current-bfttime"}},[e._v("#")]),e._v(" Current BFTTime")]),e._v(" "),o("h3",{attrs:{id:"description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),o("p",[e._v("In Tendermint consensus, the first version of how time is computed and stored in a block works as follows:")]),e._v(" "),o("ul",[o("li",[e._v("validators send their current local time as part of "),o("code",[e._v("precommit")]),e._v(" messages")]),e._v(" "),o("li",[e._v("upon collecting the "),o("code",[e._v("precommit")]),e._v(" messages that the proposer uses to build a commit to be put in the next block, the proposer computes the "),o("code",[e._v("time")]),e._v(" of the next block as the median (weighted over voting power) of the times in the "),o("code",[e._v("precommit")]),e._v(" messages.")])]),e._v(" "),o("h3",{attrs:{id:"analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[e._v("#")]),e._v(" Analysis")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Fault tolerance.")]),e._v(" The computed median time is called "),o("RouterLink",{attrs:{to:"/spec/consensus/bft-time.html"}},[o("code",[e._v("bfttime")])]),e._v(" as it is indeed fault-tolerant: if "),o("strong",[e._v("less than a third")]),e._v(" of the validators is faulty (counted in voting power), it is guaranteed that the computed time lies between the minimum and the maximum times sent by correct validators.")],1),e._v(" "),o("li",[o("strong",[e._v("Effect of faulty validators.")]),e._v(" If more than "),o("code",[e._v("1/2")]),e._v(" of the voting power (which is in fact more than one third and less than two thirds of the voting power) is held by faulty validators, then the time is under total control of the faulty validators. (This is particularly challenging in the context of "),o("RouterLink",{attrs:{to:"/spec/consensus/light-client/"}},[e._v("lightclient")]),e._v(" security.)")],1),e._v(" "),o("li",[o("strong",[e._v("Proposer influence on block time.")]),e._v(" The proposer of the next block has a degree of freedom in choosing the "),o("code",[e._v("bfttime")]),e._v(", since it computes the median time based on the timestamps from "),o("code",[e._v("precommit")]),e._v(" messages sent by\n"),o("code",[e._v("2f + 1")]),e._v(" correct validators.\n"),o("ol",[o("li",[e._v("If there are "),o("code",[e._v("n")]),e._v(" different timestamps in the  "),o("code",[e._v("precommit")]),e._v(" messages, the proposer can use any subset of timestamps that add up to "),o("code",[e._v("2f + 1")]),e._v("\nof the voting power in order to compute the median.")]),e._v(" "),o("li",[e._v("If the validators decide in different rounds, the proposer can decide on which round the median computation is based.")])])]),e._v(" "),o("li",[o("strong",[e._v("Liveness.")]),e._v(" The liveness of the protocol:\n"),o("ol",[o("li",[e._v("does not depend on clock synchronization,")]),e._v(" "),o("li",[e._v("depends on bounded message delays.")])])]),e._v(" "),o("li",[o("strong",[e._v("Relation to real time.")]),e._v(" There is no clock synchronizaton, which implies that there is "),o("strong",[e._v("no relation")]),e._v(" between the computed block "),o("code",[e._v("time")]),e._v(" and real time.")]),e._v(" "),o("li",[o("strong",[e._v("Aggregate signatures.")]),e._v(" As the "),o("code",[e._v("precommit")]),e._v(" messages contain the local times, all these "),o("code",[e._v("precommit")]),e._v(" messages typically differ in the time field, which "),o("strong",[e._v("prevents")]),e._v(" the use of aggregate signatures.")])]),e._v(" "),o("h2",{attrs:{id:"suggested-proposer-based-time"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#suggested-proposer-based-time"}},[e._v("#")]),e._v(" Suggested Proposer-Based Time")]),e._v(" "),o("h3",{attrs:{id:"outline"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),o("p",[e._v("An alternative approach to time has been discussed: Rather than having the validators send the time in the "),o("code",[e._v("precommit")]),e._v(" messages, the proposer in the consensus algorithm sends its time in the "),o("code",[e._v("propose")]),e._v(" message, and the validators locally check whether the time is OK (by comparing to their local clock).")]),e._v(" "),o("p",[e._v("This proposed solution adds the requirement of having synchronized clocks, and other implicit assumptions.")]),e._v(" "),o("h3",{attrs:{id:"comparison-of-the-suggested-method-to-the-old-one"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#comparison-of-the-suggested-method-to-the-old-one"}},[e._v("#")]),e._v(" Comparison of the Suggested Method to the Old One")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Fault tolerance.")]),e._v(" Maintained in the suggested protocol.")]),e._v(" "),o("li",[o("strong",[e._v("Effect of faulty validators.")]),e._v(" Eliminated in the suggested protocol,\nthat is, the block "),o("code",[e._v("time")]),e._v(" can be corrupted only in the extreme case when\n"),o("code",[e._v(">2/3")]),e._v(" of the validators are faulty.")]),e._v(" "),o("li",[o("strong",[e._v("Proposer influence on block time.")]),e._v(" The proposer of the next block\nhas less freedom when choosing the block time.\n"),o("ol",[o("li",[e._v("This scenario is eliminated in the suggested protocol, provided that there are "),o("code",[e._v("<1/3")]),e._v(" faulty validators.")]),e._v(" "),o("li",[e._v("This scenario is still there.")])])]),e._v(" "),o("li",[o("strong",[e._v("Liveness.")]),e._v(" The liveness of the suggested protocol:\n"),o("ol",[o("li",[e._v("depends on the introduced assumptions on synchronized clocks (see below),")]),e._v(" "),o("li",[e._v("still depends on the message delays (unavoidable).")])])]),e._v(" "),o("li",[o("strong",[e._v("Relation to real time.")]),e._v(" We formalize clock synchronization, and obtain a "),o("strong",[e._v("well-defined relation")]),e._v(" between the block "),o("code",[e._v("time")]),e._v(" and real time.")]),e._v(" "),o("li",[o("strong",[e._v("Aggregate signatures.")]),e._v(" The "),o("code",[e._v("precommit")]),e._v(" messages free of time, which "),o("strong",[e._v("allows")]),e._v(" for aggregate signatures.")])]),e._v(" "),o("h3",{attrs:{id:"protocol-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#protocol-overview"}},[e._v("#")]),e._v(" Protocol Overview")]),e._v(" "),o("h4",{attrs:{id:"proposed-time"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposed-time"}},[e._v("#")]),e._v(" Proposed Time")]),e._v(" "),o("p",[e._v("We assume that the field "),o("code",[e._v("proposal")]),e._v(" in the "),o("code",[e._v("PROPOSE")]),e._v(" message is a pair "),o("code",[e._v("(v, time)")]),e._v(", of the proposed consensus value "),o("code",[e._v("v")]),e._v(" and the proposed time "),o("code",[e._v("time")]),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"reception-step"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reception-step"}},[e._v("#")]),e._v(" Reception Step")]),e._v(" "),o("p",[e._v("In the reception step at node "),o("code",[e._v("p")]),e._v(" at local time "),o("code",[e._v("now_p")]),e._v(", upon receiving a message "),o("code",[e._v("m")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("if")]),e._v(" the message "),o("code",[e._v("m")]),e._v(" is of type "),o("code",[e._v("PROPOSE")]),e._v(" and satisfies "),o("code",[e._v("now_p - PRECISION < m.time < now_p + PRECISION + MSGDELAY")]),e._v(", then mark the message as "),o("code",[e._v("timely")]),e._v("."),o("br"),e._v("\n("),o("code",[e._v("PRECISION")]),e._v(" and "),o("code",[e._v("MSGDELAY")]),e._v(" being system parameters, see "),o("a",{attrs:{href:"#safety-and-liveness"}},[e._v("below")]),e._v(")")])]),e._v(" "),o("blockquote",[o("p",[e._v("after the presentation in the dev session, we realized that different semantics for the reception step is closer aligned to the implementation. Instead of dropping propose messages, we keep all of them, and mark timely ones.")])]),e._v(" "),o("h4",{attrs:{id:"processing-step"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#processing-step"}},[e._v("#")]),e._v(" Processing Step")]),e._v(" "),o("ul",[o("li",[e._v("Start round")])]),e._v(" "),o("table",[o("tr",[o("th",[e._v("arXiv paper")]),e._v(" "),o("th",[e._v("Proposer-based time")])]),e._v(" "),o("tr",[o("td",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gU3RhcnRSb3VuZChyb3VuZCkgewogcm91bmRfcCDihpAgcm91bmQKIHN0ZXBfcCDihpAgcHJvcG9zZQogaWYgcHJvcG9zZXIoaF9wLCByb3VuZF9wKSA9IHAgewoKIAogIGlmIHZhbGlkVmFsdWVfcCAhPSBuaWwgewoKICAgcHJvcG9zYWwg4oaQIHZhbGlkVmFsdWVfcAogIH0gZWxzZSB7CgogICBwcm9wb3NhbCDihpAgZ2V0VmFsdWUoKQogIH0KICAgYnJvYWRjYXN0IOKfqFBST1BPU0FMLCBoX3AsIHJvdW5kX3AsIHByb3Bvc2FsLCB2YWxpZFJvdW5kX3Din6kKIH0gZWxzZSB7CiAgc2NoZWR1bGUgT25UaW1lb3V0UHJvcG9zZShoX3Ascm91bmRfcCkgdG8gCiAgIGJlIGV4ZWN1dGVkIGFmdGVyIHRpbWVvdXRQcm9wb3NlKHJvdW5kX3ApCiB9Cn0K"}})],1),e._v(" "),o("td",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gU3RhcnRSb3VuZChyb3VuZCkgewogcm91bmRfcCDihpAgcm91bmQKIHN0ZXBfcCDihpAgcHJvcG9zZQogaWYgcHJvcG9zZXIoaF9wLCByb3VuZF9wKSA9IHAgewogIC8vIG5ldyB3YWl0IGNvbmRpdGlvbgogIHdhaXQgdW50aWwgbm93X3AgJmd0OyBibG9jayB0aW1lIG9mIGJsb2NrIGhfcCAtIDEKICBpZiB2YWxpZFZhbHVlX3AgIT0gbmlsIHsKICAgLy8gYWRkICZxdW90O25vd19wJnF1b3Q7CiAgIHByb3Bvc2FsIOKGkCAodmFsaWRWYWx1ZV9wLCBub3dfcCkgCiAgfSBlbHNlIHsKICAgLy8gYWRkICZxdW90O25vd19wJnF1b3Q7CiAgIHByb3Bvc2FsIOKGkCAoZ2V0VmFsdWUoKSwgbm93X3ApIAogIH0KICBicm9hZGNhc3Qg4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgcHJvcG9zYWwsIHZhbGlkUm91bmRfcOKfqQogfSBlbHNlIHsKICBzY2hlZHVsZSBPblRpbWVvdXRQcm9wb3NlKGhfcCxyb3VuZF9wKSB0byAKICAgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGltZW91dFByb3Bvc2Uocm91bmRfcCkKIH0KfQo="}})],1)])]),e._v(" "),o("ul",[o("li",[e._v("Rule on lines 28-35")])]),e._v(" "),o("table",[o("tr",[o("th",[e._v("arXiv paper")]),e._v(" "),o("th",[e._v("Proposer-based time")])]),e._v(" "),o("tr",[o("td",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiB0aW1lbHko4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgdiwgdnLin6kpIAogZnJvbSBwcm9wb3NlcihoX3AsIHJvdW5kX3ApCiBBTkQgMmYgKyAxIOKfqFBSRVZPVEUsIGhfcCwgdnIsIGlkKHYp4p+pIAp3aGlsZSBzdGVwX3AgPSBwcm9wb3NlIOKIpyAodnIg4omlIDAg4oinIHZyICZsdDsgcm91bmRfcCkgZG8gewogaWYgdmFsaWQodikg4oinIChsb2NrZWRSb3VuZF9wIOKJpCB2ciDiiKggbG9ja2VkVmFsdWVfcCA9IHYpIHsKICAKICBicm9hZGNhc3Qg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBpZCh2KeKfqQogfSBlbHNlIHsKICBicm9hZGNhc3Qg4p+oUFJFVk9URSwgaHAsIHJvdW5kX3AsIG5pbOKfqQogfQp9Cg=="}})],1),e._v(" "),o("td",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiB0aW1lbHko4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgKHYsIHRwcm9wKSwgdnLin6kpIAogZnJvbSBwcm9wb3NlcihoX3AsIHJvdW5kX3ApIAogQU5EIDJmICsgMSDin6hQUkVWT1RFLCBoX3AsIHZyLCBpZCh2LCB0dm90ZSnin6kgCiB3aGlsZSBzdGVwX3AgPSBwcm9wb3NlIOKIpyAodnIg4omlIDAg4oinIHZyICZsdDsgcm91bmRfcCkgZG8gewogIGlmIHZhbGlkKHYpIOKIpyAobG9ja2VkUm91bmRfcCDiiaQgdnIg4oioIGxvY2tlZFZhbHVlX3AgPSB2KSB7CiAgIC8vIHNlbmQgaGFzaCBvZiB2IGFuZCB0cHJvcCBpbiBQUkVWT1RFIG1lc3NhZ2UKICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhfcCwgcm91bmRfcCwgaWQodiwgdHByb3Ap4p+pCiAgfSBlbHNlIHsKICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhwLCByb3VuZF9wLCBuaWzin6kKICB9CiB9Cg=="}})],1)])]),e._v(" "),o("ul",[o("li",[e._v("Rule on lines 49-54")])]),e._v(" "),o("table",[o("tr",[o("th",[e._v("arXiv paper")]),e._v(" "),o("th",[e._v("Proposer-based time")])]),e._v(" "),o("tr",[o("td",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByLCB2LCDiiJfin6kgZnJvbSBwcm9wb3NlcihoX3AsIHIpIAogQU5EIDJmICsgMSDin6hQUkVDT01NSVQsIGhfcCwgciwgaWQodinin6kgCiB3aGlsZSBkZWNpc2lvbnBbaF9wXSA9IG5pbCBkbyB7CiAgaWYgdmFsaWQodikgewoKICAgZGVjaXNpb25fcCBbaF9wXSA9IHYKICAgaF9wIOKGkCBoX3AgKyAxCiAgIHJlc2V0IGxvY2tlZFJvdW5kX3AgLCBsb2NrZWRWYWx1ZV9wLCB2YWxpZFJvdW5kX3AgYW5kIAogICAgdmFsaWRWYWx1ZV9wIHRvIGluaXRpYWwgdmFsdWVzIGFuZCBlbXB0eSBtZXNzYWdlIGxvZyAKICAgU3RhcnRSb3VuZCgwKQogIH0KIH0K"}})],1),e._v(" "),o("td",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByLCAodix0KSwg4oiX4p+pIGZyb20gcHJvcG9zZXIoaF9wLCByKSAKIEFORCAyZiArIDEg4p+oUFJFQ09NTUlULCBoX3AsIHIsIGlkKHYsdCnin6kKIHdoaWxlIGRlY2lzaW9ucFtoX3BdID0gbmlsIGRvIHsKICBpZiB2YWxpZCh2KSB7CiAgIC8vIGRlY2lkZSBvbiB0aW1lIHRvbwogICBkZWNpc2lvbl9wIFtoX3BdID0gKHYsdCkgCiAgIGhfcCDihpAgaF9wICsgMQogICByZXNldCBsb2NrZWRSb3VuZF9wICwgbG9ja2VkVmFsdWVfcCwgdmFsaWRSb3VuZF9wIGFuZCAKICAgIHZhbGlkVmFsdWVfcCB0byBpbml0aWFsIHZhbHVlcyBhbmQgZW1wdHkgbWVzc2FnZSBsb2cgCiAgIFN0YXJ0Um91bmQoMCkKICB9CiB9Cg=="}})],1)])]),e._v(" "),o("ul",[o("li",[e._v("Other rules are extended in a similar way, or remain unchanged")])]),e._v(" "),o("h3",{attrs:{id:"property-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#property-overview"}},[e._v("#")]),e._v(" Property Overview")]),e._v(" "),o("h4",{attrs:{id:"safety-and-liveness"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#safety-and-liveness"}},[e._v("#")]),e._v(" Safety and Liveness")]),e._v(" "),o("p",[e._v("For safety (Point 1, Point 2, Point 3i) and liveness (Point 4) we need\nthe following assumptions:")]),e._v(" "),o("ul",[o("li",[e._v("There exists a system parameter "),o("code",[e._v("PRECISION")]),e._v(" such that for any two correct validators "),o("code",[e._v("V")]),e._v(" and "),o("code",[e._v("W")]),e._v(", and at any real-time "),o("code",[e._v("t")]),e._v(", their local times "),o("code",[e._v("C_V(t)")]),e._v(" and "),o("code",[e._v("C_W(t)")]),e._v(" differ by less than "),o("code",[e._v("PRECISION")]),e._v(" time units,\ni.e., "),o("code",[e._v("|C_V(t) - C_W(t)| < PRECISION")])]),e._v(" "),o("li",[e._v("The message end-to-end delay between a correct proposer and a correct validator (for "),o("code",[e._v("PROPOSE")]),e._v(" messages) is less than "),o("code",[e._v("MSGDELAY")]),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"relation-to-real-time"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#relation-to-real-time"}},[e._v("#")]),e._v(" Relation to Real-Time")]),e._v(" "),o("p",[e._v("For analyzing real-time safety (Point 5), we use a system parameter "),o("code",[e._v("ACCURACY")]),e._v(", such that for all real-times "),o("code",[e._v("t")]),e._v(" and all correct validators "),o("code",[e._v("V")]),e._v(", we have "),o("code",[e._v("| C_V(t) - t | < ACCURACY")]),e._v(".")]),e._v(" "),o("blockquote",[o("p",[o("code",[e._v("ACCURACY")]),e._v(" is not necessarily visible at the code level.  We might even view "),o("code",[e._v("ACCURACY")]),e._v(" as variable over time. The smaller it is during a consensus instance, the closer the block time will be to real-time.")]),e._v(" "),o("p",[e._v("Note that "),o("code",[e._v("PRECISION")]),e._v(" and "),o("code",[e._v("MSGDELAY")]),e._v(" show up in the code.")])]),e._v(" "),o("h3",{attrs:{id:"detailed-specification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#detailed-specification"}},[e._v("#")]),e._v(" Detailed Specification")]),e._v(" "),o("p",[e._v("This specification describes the changes needed to be done to the Tendermint consensus algorithm as described in the "),o("a",{attrs:{href:"https://arxiv.org/abs/1807.04938",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),o("OutboundLink")],1),e._v(" and the simplified specification in "),o("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/rust-spec/tendermint-accountability/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("TLA+"),o("OutboundLink")],1),e._v(", and makes precise the underlying assumptions and the required properties.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/v1/pbts-sysmodel_001_draft.html"}},[e._v("Part I - System Model and Properties")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/v1/pbts-algorithm_001_draft.html"}},[e._v("Part II - Protocol specification")])],1),e._v(" "),o("li",[o("a",{attrs:{href:"../tla/TendermintPBT_001_draft.tla"}},[e._v("TLA+ Specification")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);