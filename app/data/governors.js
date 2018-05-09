let governors = [];
let stances = [];

let waltzStances = [];
let murphyStances = [];
let johnsonStances = [];
let parrishStances = [];
let stephensStances = [];

function Governor (name, photo, party, site, stances) {
    this.name = name,
    this.photo = photo,
    this.party = party,
    this.site = site,
    this.stances = stances,
    governors.push(this);
    }

function Stances (governor,issue,stance){
    this.governor = governor,
    this.issue = issue,
    this.stance = stance,
    stances.push(this)
}

let murphy1 = new Stances (
    `Erin Murphy`,
    `Mining`,
    `My job as governor is to protect the interests of Minnesotans. Water is a strategic asset to the state and critically important to our health and future. Jobs are critically important to families and communities. I believe it is my job as governor to follow the science, develop better solutions through research to protect our environment, enforce the law to protect Minnesotans if contracts are breached, and fix the law if it doesn’t already protect our state.\n\nWhen water gets pitted against jobs, we risk losing one to the other. For our future, we need both.\n\nIt’s imperative, especially in the real possibility that Polymet is issued a permit before the election, that actuarially sound and strong financial assurances are secured, and enforced. Any production would need to stop should agreements not be met.\nIt’s important that we follow the law. If the permitting process that is in law isn’t doing a good enough job of protecting the interests of Minnesotans, then we need to fix it. And if a corporation violates their permit then production should be halted until they can prove they will be back in compliance.\nIt’s important to me that we follow the law because acting unilaterally sets the precedence for future governors to act outside laws that they dislike. This is problematic for a number of different reasons and not just as it’s related to environmental permitting in the future.  \nI’ll protect our state from corporate interests that seek to weaken our permitting process for their financial gain. We see these efforts both at the state and federal level. I’ve voted against them repeatedly, and would continue to oppose them if the science is not sound.\nAlthough we often focus on mining, in Minnesota, we are hard on our water – with agriculture, with overdevelopment, with road salt, and with manufacturing. So it’s imperative we invest in the research already taking place at the Natural Resources and Research Institute at UMD around advanced filtration, reverse osmosis, and other ways to clean impaired waters. As governor I would ensure that we invest in that research more heavily to protect and repair water, regardless of the project.\nRegarding Twin Metals, the state’s current role in the project is limited, mostly around access to the site and to state land adjacent to the federal land that they wants to mine. I would not allow any lease to be issued to Twin Metals for any use without going through our state-mandated process, nor would I shortcut any study or research necessary to inform that decision. This is what Friends of the Boundary Waters has asked for, and I’m fully committed to that.`
    )
    
    murphyStances.push(murphy1)
    
    let murphy2 = new Stances (
    `Erin Murphy`,
    `Economic Justice`,
    `I’ve spent more than a decade traveling the state, talking with Minnesotans in their communities about the things that make them tick. One thing I hear over and over again is a feeling of financial insecurity. That no matter how many hours you put in, you still can’t get ahead. That’s not right.\n\nI support raising the state’s minimum wage to a living wage and ensuring everyone has access to paid sick and safe time. It’s critical that every Minnesotan be paid a living wage and have the benefits necessary to provide for themselves and their family.\nI will support labor and work to expand collective bargaining. I come from a labor family and the backing of my union – the nurses union – ensured the I was paid my worth and that my working conditions were safe. Working people in Minnesota deserve that support.\nAs governor, I will be a fierce advocate for workers’ rights, including policies that ensure equitable economic opportunities for women, especially women of color and indigenous women.\nThe lack of affordable, accessible child care is holding too many Minnesotans back from entering the workforce and it’s having adverse effects on our local economy. I will work with communities all over the state to ensure quality child care is available and affordable.\nBy investing in infrastructure, both human and capital, I know we can keep Minnesotans working all over the state. Let’s create new jobs by expanding broadband access, increasing our use of electric vehicles, and by repairing outdated waste and drinking water infrastructure.\nLet’s encourage the spirit of entrepreneurship by supporting the Main Street businesses that support our communities, helping young, burgeoning farmers with start-up costs, and investing in innovation that has the potential to spur the next sector of our economy.`
    )
    
    murphyStances.push(murphy2)
    
    let murphy3 = new Stances (
    `Erin Murphy`,
    `Climate, Water, & the Environment`,
    `I know that climate change is absolutely a fundamental threat to Minnesota. Clean water is a limited, strategic asset that we must protect because it’s vital for our communities and it’s part of our cultural heritage – especially as a state whose economy still depends greatly on agriculture and tourism generated by the beauty of our state.\n\nTo help Minnesota move away from fossil fuels, I support strengthening efforts like our renewable energy standards (RES), dramatically increasing our use of electric vehicles by investing in the infrastructure necessary to make electric vehicles an option for Minnesotans regardless of where they live, and serious investments in making buildings more efficient.\nWe must reduce carbon emissions and also factor in the long-term damage done by them. I’ll also work to expand Minnesota’s green energy portfolio to include more wind, solar, biomass and other renewable options.\nI will invest more in the Natural Resources Research Institute (NRRI) in their pursuit of scientific advances capable of cleaning impaired water. Further investments could expand their reach to prevent water from impairment and react quickly to compromised water.\nI will invest more in the development of perennial crops which will help farmers grow crops that have a market, while also protecting and restoring the health of our land.\nThere is roughly $11 billion in necessary projects to update our state and local waste and drinking water infrastructure, and failure to make these repairs will put us in danger of contaminating our water in communities all over the state. I believe we must make those bonding investments so that Minnesotans and our communities are not as risk.`
    )
    
    murphyStances.push(murphy3)
    
    let murphy4 = new Stances (
    `Erin Murphy`,
    `Equity and Justice`,
    `Racial & Indigenous Equity\n\nDisparities for communities of color and indigenous communities in Minnesota are some of the worst in our country, making Minnesota the second most unequal state to live in. We’ve got to change.\n\nWe can tackle health disparities by working to disrupt our health care delivery models. I authored legislation in 2010, Health Care Homes, which asks providers to directly reach out to people in their care. It saved the state a billion dollars, but also reduced health disparities for people of color.\nWe can’t build a strong economy without closing the significant wage gap faced by people of color and indigenous people – and specifically women of color and indigenous women – ending workplace discrimination, and ensuring that all Minnesotans make a wage that supports themselves and their families.\nWe can close the opportunity gap by investing in pre-k and early learning, providing home visits, and hiring teachers of color who represent the communities in which they’re working.\nWe know that people of color and indigenous Minnesotans are often treated differently by our criminal justice system. It’s why I support cannabis legalization that includes record expungement, a process for releasing non-violent offenders, and support for them as they transition out of the criminal justice system.\nIt is also critical to our democracy that we restore the vote for Minnesotans who have served their time for felony convictions. Voting is a sacred right and it is a powerful tool in building strong, powerful communities.`
    )
    
    murphyStances.push(murphy4)
    
    let murphy5 = new Stances (
    `Erin Murphy`,
    `Guarding the Tools of our Democracy`,
    `The tools of our democracy are how we exert our power, and right now those tools are under attack. The influence of big money and special interests on our elections is undercutting the power of Minnesotans to build their bright future.\n\nWe must pass meaningful campaign finance reform, including the expansion of public financing of elections, to make it easier for citizens to see who is funding elections.\nI support moving politics out of our redistricting process by tasking an independent judicial panel to make decisions about how lines are drawn.\nI want to expand access to the ballot box with measures like automatic registration when Minnesotans turn 18-years old.\nCollective bargaining is under attack across the country, and we’ve seen attacks here in Minnesota. I will veto any Right-to-Work legislation and will work to expand collective bargaining.\nAttacks on the free press and the proliferation of fake news is hurting our access to information. As governor, I’ll work with the press to make sure they have the information necessary to keep Minnesotans informed about policymaking at the capitol.\nIt is also critical to our democracy that we restore the vote for Minnesotans who have served their time for felony convictions. Voting is a sacred right and it is a powerful tool in building strong, powerful communities.`
    )
    
    murphyStances.push(murphy5)
    
    let murphy6 = new Stances (
    `Erin Murphy`,
    `Education`,
    `We can’t build our bright future without investing in our kids. They will be the builders, thinkers, creators, and doers of tomorrow. We need to build an education system that is as ambitious and as hopeful as our children.\n\nWe must close the opportunity gap. I think we start by investing in early learning opportunities and voluntary pre-K for every child, fund full-service community schools that support students and their families in and outside the classroom, and by ensuring our teacher workforce is diverse and reflects the student population.\nI will reevaluate the use of standardized tests in our schools because our educators are spending way too much time teaching kids how to pass a test and not nearly enough on how to succeed in and navigate the world.\nLet’s help students find their passion by guaranteeing access to career and technical education.\nOur schools have been starved for too long, and I will make sure public schools have the tools and resources they need to provide a world-class education for every student.\nThe answer to the teacher shortage is not to put unqualified teachers in our kids’ classrooms. Instead, let’s support our educators by protecting their right to collectively bargain and ensure a high-quality teacher licensure process.`
    )
    
    murphyStances.push(murphy6)
    
    let murphy7 = new Stances (
    `Erin Murphy`,
    `Housing`,
    `I believe that housing is essential to our health, education, and employment. Incomes are not keeping pace with the increasing cost of housing, and we are facing a shortage in affordable housing. Every year we lose more naturally occurring affordable housing than we produce in affordable housing units. We must do more to ensure that all Minnesotans have a stable and affordable place to live.\n\nI will propose and sign bonding bills annually, and I will commit to dedicating $100 million to affordable housing each year.\nI will work to protect naturally occurring affordable housing that we lose each year due to conversions to non-affordable housing and to disrepair. I will work to slow down that conversion and to assure affordability.\nI will work with communities throughout the state to ensure that their unique circumstances are addressed, because without affordable housing, communities and employers struggle to attract and retain a skilled and adequate workforce.`
    )
    
    murphyStances.push(murphy7)
    
    let murphy8 = new Stances (
    `Erin Murphy`,
    `Higher Education`,
    `Higher Education:\n\nAs we work to build a strong E-12 public education system, let’s also plan for our future by addressing higher education and the shortage of skilled workers.\n\nI support two years of free higher education, but I don’t think it’s enough. We must talk about how we can help our students make a successful financial transition should they choose to complete a four-year program. As part of that, I support free tuition for those whose families make $150,000 or less a year.\nWe must offer expanded refinancing options and loan forgiveness programs, and create an office of the ombudsperson for student debt to help those that have already graduated. It is a sin that the federal government is making money off of student loans.\nDuring high school, let’s invest in technical programs and apprenticeships to revitalize our workforce and provide students with ample opportunities to build the life of their choosing upon graduation.`
    )
    
    murphyStances.push(murphy8)
    
    let murphy9 = new Stances (
    `Erin Murphy`,
    `Healthcare`,
    `I am a supporter of single-payer and a co-author on John Marty’s Minnesota Health Plan. A full single-payer solution isn’t possible without federal participation, but we can build the infrastructure here in Minnesota and lead the nation.\nLet’s start by opening up MinnesotaCare to anyone who wants it. In 2014 I passed legislation that expanded a public option for school employees and they are seeing lower costs and higher-quality care.\nThen let’s contract directly with providers – nurses, doctors, and hospitals. Putting providers and Minnesotans back in control of their care, and trusting providers as they do their best work, will drive better value and most importantly, health outcomes.\nWe must invest in our healthcare workforce. Training programs that target nurses, home healthcare workers, and others will help meet the needs of patients, while also revitalizing local economies across the state.`
    )
    
    murphyStances.push(murphy9)
    
    let murphy10 = new Stances (
    `Erin Murphy`,
    `Equity and Justice`,
    `Disability Equity & Accessibility\n\nFor Minnesotans with disabilities, our communities are often inaccessible, making it difficult to get to work, school, or the doctor’s office. Not to mention, folks with disabilities are often not at the table when we’re making decisions that will directly affect them.\n\nI want to ensure sure that everything from public transit and sidewalks to malls and restaurants are fully accessible.\nI’ll fight to ensure that individuals with disabilities and their families have control over the care and services they receive.\nLet’s ensure that people with disabilities are fully included in their schools, workplaces, and communities and are able to live independently for as long as they choose by investing in the services and affordable housing options that make it possible. `
    )
    
    murphyStances.push(murphy10)
    
    let murphy11 = new Stances (
    `Erin Murphy`,
    `Equity and Justice`,
    `LGBTQ + Equity\n\nI have worked with advocacy groups to expand rights for the LGBTQ+ community, and when I was Majority Leader we passed marriage equality with the help of thousands of Minnesotans. But we can’t rest on that work.\n\nI’ll work to streamline processes related to changing one’s gender or name on official identification cards.\nRight now the ability for trans Minnesotans to access the care they need depends on what their insurance will cover. That’s not right, and I’ll work to ensure trans Minnesotans get the coverage they need, and when they do, aren’t forced to jump through unnecessary hoops to access it.\nI vehemently oppose efforts that discriminate and dehumanize LGBTQ+ Minnesotans, like conversion therapy and so-called “bathroom bills” dictating who can use public bathrooms.`
    )
    
    murphyStances.push(murphy11)
    
    let murphy12 = new Stances (
    `Erin Murphy`,
    `Cannabis`,
    `The current law around the use of cannabis both restricts doctors in prescribing what, for many, is an excellent tool to manage pain and unnecessarily creates criminal penalties for non-violent offenders, too often People of Color.\n\nI support recreational marijuana legalization that includes record expungement, a process for releasing non-violent offenders, and support for them as they transition out of the criminal justice system. I believe it’s important that we do that piece at the same time we legalize.\nI support expanding the state’s medical cannabis program to allow doctors to prescribe medical cannabis to any patient they believe would see a medical value from it. This gives doctors more tools to help people manage pain and would reduce our use of opioids.`
    )
    
    murphyStances.push(murphy12)
    
    let murphy13 = new Stances (
    `Erin Murphy`,
    `Sexual Harassment and Assault`,
    `Sexual harassment and assault is a pervasive issue, not only on the national stage, but here at home on campuses, in workplaces, at the Capitol, and in our communities.\n\nI support and have authored affirmative consent legislation, under which universities must constitute consent as a fully informed “yes,” given without the influence of drugs, alcohol, or intimidation.\nVictim-survivors shouldn’t assume the hefty financial burden of health costs associated with their assaults.  I will make sure health insurance covers those costs and that the state does when health insurance doesn’t.\nLet’s be proactive in addressing sexual assault and harassment by providing age appropriate, K-12 curriculum that teaches personal boundaries, bodily autonomy, and respect.  `
    )
    
    murphyStances.push(murphy13)
    
    let murphy14 = new Stances (
    `Erin Murphy`,
    `Gun Violence Prevention`,
    `I’m proud to have earned an “F” rating from the NRA. They’ve never offered me money, and I would never accept. We’ve lost too many lives to gun violence and suicide by gun. Minnesota must take the lead by implementing strong measures for gun violence prevention, including:\n\nBanning assault weapons.\nAsking law enforcement to intervene in situations where a person who possesses or is looking to purchase a gun is considered a threat to themselves or their community.\nRestrictions on magazine capacity.\nRequiring built-in safety measures that limit accidents and holding gun manufacturers responsible if that standard isn’t met.\nRequiring universal background checks.\nLifting the ban on researching gun violence as a public health issue.`
    )
    
    murphyStances.push(murphy14)
    
    let murphy15 = new Stances (
    `Erin Murphy`,
    `Equity and Justice`,
    `Gender Equity\n\nWe must continue to fight for gender equity and create a state in which women are able to make their own choices about their health, careers, and private lives without intrusion or retaliation.\n\nWe must author legislation that closes the pay gap between men and women, as well as the significant pay gap between white women and women of color and indigenous women.\nWe must create cultural change through policies that require affirmative consent, enhanced education, and aggressive action against sexual harassment and violence.\nI’ll fight not only for reproductive choice, but for reproductive justice as well, ensuring that all women have access to affordable healthcare, contraception, and abortion services.`
    )
    
    murphyStances.push(murphy15)
    
    let murphy16 = new Stances (
    `Erin Murphy`,
    `Immigration`,
    `Minnesota must be a state where all of our neighbors are treated with respect and dignity. It’s also critical for our future; we need the hard work and bright ideas of people all over the world to build our economy. That’s why, as a state, we must unite against efforts by the federal government to attack immigrants living in Minnesota. Our communities must be strong, safe, and welcoming.\n\nI support drivers licenses for all, an initiative that keeps our roads safe while ensuring that people are able to get to work or take their child to the doctor and school.\nOur state and law enforcement must not serve as an extension of ICE, nor should Minnesota prisons be used as detention centers.`
    )
    
    murphyStances.push(murphy16)
    
    let murphy17 = new Stances (
    `Erin Murphy`,
    `Reproductive Justice`,
    `I am pro-choice and will always work and fight to protect reproductive freedom and choice for all Minnesotans.\n\nI will pursue reproductive justice for women of color, trans folks, and women living in low-wealth and rural communities, ensuring that where there is choice, there is also access to contraception, women’s health clinics, and abortion services.\nFor many years I’ve authored the contraception equity bill, requiring Minnesota health plans to provide prescription drug coverage to cover contraception without charging a co-pay.`
    )
    
    murphyStances.push(murphy17)
    
    let johnson1 = new Stances (
    `Jeff Johnson`,
    `Taxes & Spending`,
    `Government’s appetite for overspending in Minnesota goes hand in hand with the desire to push government programs and regulations into every corner of our lives.\n\nI believe we need to cut taxes and reduce the size and power of government. We’ll start by capping property tax increases, ending big corporate tax subsidies and instituting an Automatic Taxpayer Refund when government over-taxes Minnesotans.\n\nTaxes and spending issues are not only economic, they are moral. Empowering Minnesotans starts with us deciding how our hard-earned money is spent--not government. Greatly reducing spending levels and increasing take-home pay will result in a badly needed explosion of economic activity, growth, and opportunity.`
    )
    
    johnsonStances.push(johnson1)
    
    let johnson2 = new Stances (
    `Jeff Johnson`,
    `Agriculture and Natural Resources`,
    `Minnesota’s economy was built on agriculture and our natural resources.\n\nThat’s not to say that farming, logging and mining are the only parts of the economy that matter, but they provide the rock-solid foundation upon which many other industries have been built.\n\nYet government is doing little but getting in the way of people who work the land. Government permitting too often harasses farmers, miners lose jobs because of bureaucrats and regulations and loggers often are treated as pariahs.\n\nI grew up in rural Minnesota. I know what a blessing our natural resources are, and that the people whose livelihoods depend upon using them are better stewards of the land than any bureaucrat in St. Paul.`
    )
    
    johnsonStances.push(johnson2)
    
    let johnson3 = new Stances (
    `Jeff Johnson`,
    `Government Reform`,
    `Our state desperately needs a fundamental change in the size, scope, and philosophy of government. In short, this means taking power away from government and giving it back to the people of Minnesota. We must--and will--create a mindset in government that it is a servant of the people, not the other way around. This will have a lasting, positive impact on Minnesota for generations.\n\nAchieving this fundamental change will be the overriding mission of my Administration.  As a start, I will push for term limits, initiate a top-to-bottom audit of the programs Minnesota taxpayers fund and veto any omnibus bill that does not adhere to the single-subject rule.`
    )
    
    johnsonStances.push(johnson3)
    
    let johnson4 = new Stances (
    `Jeff Johnson`,
    `Public Safety`,
    `While the role of government in our lives should be as limited as possible, providing for the public safety of all Minnesotans is one of the most important jobs of government.\n\nWhile I have always supported alternatives to incarceration for low-level, nonviolent offenders and believe strongly in providing second chances for those who make mistakes, we have one of the lowest incarceration rates in the country and violent criminals must be locked up and very violent criminals must be locked up for a very long time. Under my administration, Minnesota will be a safe place for law-abiding citizens and a terrible place for violent criminals.`
    )
    
    johnsonStances.push(johnson4)
    
    let johnson5 = new Stances (
    `Jeff Johnson`,
    `Healthcare`,
    `Between the skyrocketing cost of health insurance and the declining lack of access in Greater Minnesota, nearly every Minnesota family has been increasingly impacted. MNsure has been a complete disaster and has proven that new approaches are desperately needed.\n\nI will work to return the power over health care to patients and citizens, and take advantage of federal waivers allowing Minnesota to abandon the provisions of Obamacare that have limited choice and increased costs. I will also start negotiating with other Midwestern states to increase competition by creating an interstate compact to sell and buy insurance across state lines.`
    )
    
    johnsonStances.push(johnson5)
    
    let johnson6 = new Stances (
    `Jeff Johnson`,
    `Jobs`,
    `All Minnesotans deserve an economy where hard work is the only limit to success. The way to achieve this is to create an environment that encourages our small-business owners and embraces both the jobs of today and tomorrow. Our government has failed miserably to do this and instead has been a direct obstacle--this changes on Day One of my Administration.\n\nWhether it’s taxes, regulations or a government attitude of helping rather than antagonizing job creators, I will work every day as your governor to make Minnesota’s business climate competitive with those states that surround us.   `
    )
    
    johnsonStances.push(johnson6)
    
    let johnson7 = new Stances (
    `Jeff Johnson`,
    `K-12 Education`,
    `I believe that parents, not the state or the education unions, are the best decision-makers when it comes to the education of a child.  We must empower parents to make those decisions and allow teachers the freedom to teach without unending interference from politicians.\n\nTo begin this process, we will start to eliminate some of the many state mandates on our schools and teachers, institute a “Parent Trigger” allowing parents to take action to fix failing schools, and do everything possible to allow real education choice for every parent in Minnesota.`
    )
    
    johnsonStances.push(johnson7)
    
    let johnson8 = new Stances (
    `Jeff Johnson`,
    `Transportation`,
    `Transportation is the lifeblood of Minnesota’s economy and also directly impacts quality of life. By employing common sense and long-term planning there is no reason we can’t achieve great roads and solve our broader transportation issues without breaking the bank.\n\nThe Johnson Administration will put a moratorium on light rail and focus transit money on a first-class bus system.  In the Metro, I’ll base my transportation funding decisions on projects that relieve congestion and provide mobility to the citizens of Minnesota.`
    )
    
    johnsonStances.push(johnson8)
    
    let johnson9 = new Stances (
    `Jeff Johnson`,
    `Metropolitan Council`,
    `I’m on the ground fighting the Met Council every single day on the Hennepin County Board. The damage this organization does is not hypothetical to me and I will work aggressively to eliminate it entirely and start over with a limited regional body (without taxing authority) to coordinate sewer and water service lines and an integrated bus system.  \n\nWe cannot “tinker” with the Met Council.  It must go.`
    )
    
    johnsonStances.push(johnson9)
    
    let johnson10 = new Stances (
    `Jeff Johnson`,
    `Principles`,
    `The key to a stronger and more prosperous Minnesota is taking power away from government and giving it back to the people.\nGovernment is a creation of and a servant to the people.\nMinnesota’s sovereignty and liberty are non-negotiable and must be aggressively defended from Federal government overreach. We control our own destiny.\nEvery life (born and unborn) is sacred.`
    )
    
    johnsonStances.push(johnson10)
    
    let johnson11 = new Stances (
    `Jeff Johnson`,
    `Second Amendment`,
    `The U.S. Constitution is unequivocal: “A well-regulated militia being necessary to the security of a free state, the right of the people to keep and bear arms shall not be infringed.”\n\nSelf-defense is a fundamental individual right and creating new “gun control” restrictions on law-abiding citizens will only leave guns in the hands of criminals.`
    )
    
    johnsonStances.push(johnson11)
    
    let johnson12 = new Stances (
    `Jeff Johnson`,
    `Life`,
    `There is no more important issue than protecting innocent life. Not only is this a moral issue, recent breakthroughs in science and technology have made even more clear that we must protect the life of the unborn. I am Pro-Life and believe in the sanctity of human life from conception to natural death.`
    )
    
    johnsonStances.push(johnson12)
    
    let johnson13 = new Stances (
    `Jeff Johnson`,
    `The Constitution`,
    `The state and federal constitutions are not lists of suggestions, but the concrete operating rules for our government. I view the Constitution as my job description as governor.`
    )
    
    johnsonStances.push(johnson13)
    
    let stephens1 = new Stances (
    `Mary Giuliani Stephens`,
    `Economy & Jobs`,
    `The foundation of a great economy is empowering the creativity and choices of individuals in a free marketplace. Politicians often believe they know better than consumers and businesses. But picking winners and losers never works, and government interference in market economies almost always results in slower economic growth and job creation.\n\nBecause Minnesota government regulations are too complicated and taxes are too high, Minnesota is below the national average in entrepreneurship. Too few people start and grow their businesses here, ensuring that future industries won’t have roots in Minnesota. That must change to encourage the next generation of entrepreneurs to make Minnesota home.`
    )
    
    stephensStances.push(stephens1)
    
    let stephens2 = new Stances (
    `Mary Giuliani Stephens`,
    `Education`,
    `Minnesotans are rightly proud of our tradition of ensuring our kids have the best education. Over the years, though, our education bureaucracy has grown, while the quality of the education our kids get has become spotty. Some school districts have high standards and consistently high levels of achievement, while others struggle to graduate students out of high school.\n\nEducation is the one thing Minnesota’s state constitution ascribes as a duty to the state, yet too often results are not the criteria prioritized in the state’s budget. Education is the talent pipeline for Minnesota’s next generation of leaders in business and the community, so our kids must come first.`
    )
    
    stephensStances.push(stephens2)
    
    let stephens3 = new Stances (
    `Mary Giuliani Stephens`,
    `Natural Resources`,
    `The bedrock of Minnesota’s economy is our abundant natural resources and food production.\n\nOne out of five jobs in Minnesota is directly tied to agriculture, food production, and food processing. Minnesota should be encouraging our vibrant agricultural industries, not hindering them with overregulation.\n\nThe best stewards of God’s creation are those whose lives and work depend upon taking care of that land. No family or community wants to pass onto the next generation a planet polluted and depleted by exploitation. Government should not treat farmers, miners, and loggers as if they are the enemy of a cleaner and more prosperous Minnesota.`
    )
    
    stephensStances.push(stephens3)
    
    let stephens4 = new Stances (
    `Mary Giuliani Stephens`,
    `Health Care`,
    `The federal government’s interference in Minnesota’s health care system has set Minnesota back, especially for small businesses and the middle class. Choices have been reduced, costs have exploded, and every year thousands lose their health insurance and have to scramble to find alternatives.\n\nMinnesota has led the world in health care, but Obamacare is pushing our expenses up and our quality down. No governor can repeal Obamacare, but I am committed to working with the President to lift the burdens that federal interference has imposed on Minnesota’s innovative capacity to improve health care.`
    )
    
    stephensStances.push(stephens4)
    
    let stephens5 = new Stances (
    `Mary Giuliani Stephens`,
    `Transportation`,
    `Government’s role in transportation is to enable the most mobility of goods and people across our entire state, in urban, suburban, and rural areas. Ensuring a sufficient and well-maintained highway system must be our first priority, because our economy and our citizens depend upon it.\n\nFor too long the Metropolitan Council has overemphasized light rail transit, spending billions on rail lines that can only move a tiny fraction of people and not goods and services.`
    )
    
    stephensStances.push(stephens5)
    
    let stephens6 = new Stances (
    `Mary Giuliani Stephens`,
    `Spending`,
    `Too many politicians think our quality of life is determined by how much government spends. Minnesota’s great quality of life is built upon the foundation of healthy families, a strong economy, and our bountiful natural resources.\n\nFamilies know better than government what will improve their quality of life, and lawmakers must recognize the fact that every dollar they tax and spend is a dollar less that our families have to invest in their own future.`
    )
    
    stephensStances.push(stephens6)
    
    let stephens7 = new Stances (
    `Mary Giuliani Stephens`,
    `Taxes`,
    `Governor Dayton raised taxes by billions of dollars, but we haven’t solved the problems that he promised higher taxes would solve.\n\nThrowing money at problems hasn’t achieved better results. It’s time we recognized that Minnesotans are taxed enough, and look to streamlining government to reduce taxes while providing the services that people need.\n\nWe need to get Minnesota out of the top 10 in taxes.`
    )
    
    stephensStances.push(stephens7)
    
    let stephens8 = new Stances (
    `Mary Giuliani Stephens`,
    `Second Amendment`,
    `I believe that the Second Amendment means what it says: that the right of the people to keep and bear arms shall not be infringed.\n\nThe Bill of Rights is quite clear: our civil rights are not negotiable, and it is not government’s role to decide which of our civil rights we can keep.`
    )
    
    stephensStances.push(stephens8)
    
    let stephens9 = new Stances (
    `Mary Giuliani Stephens`,
    `Life`,
    `I believe God creates all life, and in the sanctity of life from conception until natural death.`
    )
    
    stephensStances.push(stephens9)
    
    let parrish1 = new Stances (
    `Phillip Parrish`,
    `Top Priority`,
    `to support private healthcare programs through access to care and private insurance;\nto cut individual and corporate taxes including removing “death tax” policies;\nto expose and remove policies that promote sanctuary cities and programs;\nto end taxpayer-funded programs that threaten life (conception to natural death);\nto end programs that promote foreign government interests and policies;\nto rescind executive orders that overburden small and large businesses;\nto challenge Minnesota education programs and restore our place as the gold standard in the nation;\nand to make extraordinary efforts to modernize our transportation, energy, and communication infrastructure.`
    )
    
    parrishStances.push(parrish1)
    
    let parrish2 = new Stances (
    `Phillip Parrish`,
    `2nd AMENDMENT RIGHTS`,
    `“Come and try to take it from me.” Does that sum up my stance on our 2nd Amendment right to keep and bear arms? Freedom, Security, Prosperity. These principles are the backbone of my Mission as Governor. I will ensure that each law-abiding, competent Minnesota citizen will have the right to own and carry a firearm to ensure personal and family security at all times. I will also work to encourage and implement a US Constitutional Carry law allowing for inter-state travel with proper ID. Again, this will provide security for the hunter-fisherman, as well as for the millions of families camping and traveling throughout the country.`
    )
    
    parrishStances.push(parrish2)
    
    let parrish3 = new Stances (
    `Phillip Parrish`,
    `TAXATION-SOCIAL SECURITY`,
    `Minnesota currently ranks #8 in overall taxation with excessive taxes ranging from wheelage tax, cellphone tax, environmental and recycle tax, gas tax, and worst of all, a SOCIAL SECURITY retirement benefit tax! That’s right! First we pay tax on our monthly earnings; then, we in Minnesota, are taxed again when we retire and collect our earned Social Security check! 37 other states do not tax Social Security benefits for seniors, but Minnesota does. This is the first tax I will eliminate as quickly as possible, allowing Minnesota seniors access to their entire earnings.`
    )
    
    parrishStances.push(parrish3)
    
    let parrish4 = new Stances (
    `Phillip Parrish`,
    `MINING`,
    `Mining has been done in Minnesota for over 100 years. As Governor, I will work with you to get mining industries back to mining and producing wealth and independence in Minnesota. I will use the office of Governor to end the long delays and blockades to permitting. I will remove unnecessary mandates and regulations. Our miners are the best stewards of our natural resources and they can and will be trusted to protect it again.`
    )
    
    parrishStances.push(parrish4)
    
    let waltz1 = new Stances (
    `Tim Waltz`,
    `Wages, Benefits, and Workers’ Rights`,
    `Our Administration will fight to make sure everyone has the chance to thrive – Our Administration will:\n\nIncrease the Minnesota minimum wage to $15 an hour. $15 an hour is not the answer for all of Minnesota’s woes, but it’s central to ensuring that Minnesotans can thrive. On this issue, we have to lead by example – everyone on the Walz Flanagan campaign is paid a living wage (and receives benefits too!).\nImprove and expand safe and sick time laws  so that when a member of your family is sick you can care for that person. When Minnesota workers are sick, they deserve a chance to get healthy. Our Administration think businesses to allow workers to accumulate sick and safe time. They’ll also ensure that there is strong enforcement of laws that prevent employers from penalizing workers for using the sick time. The sick time needs to cover a large range of issues (from domestic violence to providing long-term care).\nFight for fair scheduling rules because showing up for our families is important. One obstacle that modern families face are schedules without predictability or advance notice. Fair scheduling rules ensure that workers receive proper notification regarding their schedules, are compensated for last minute changes, and can rest in between shifts.\nExpand paid family leave, since so many families are sandwiched between raising their children and caring for their parents and grandparents.\nFight wage theft and expand protections against wage theft. Sadly there are still bad-actor employers who find ways to steal wages from workers. Our Administration will ensure that there are stiff penalties, a strong Department of Labor & Industry to hold them accountable, and training to educate workers.\nProtect bargaining rights and encourage worker organizations because being able to work together with your co-workers and bargain for a better deal is an important way to help workers get the pay and benefits they need and to check the power of corporations. Our Administration will protect the right to collectively bargain and will support worker organizations as they fight for their future.\nFight wage theft and expand protections against wage theft because sadly there are still employers who find ways to steal wages from workers, from not paying overtime to not paying workers their last paycheck. Our Administration will ensure that there are stiff penalties, a strong Department of Labor & Industry to hold them accountable, and training to educate workers.\nProtect bargaining rights and encourage worker organizations, because being able to work together with your co-workers and bargain for a better deal is an important way to help workers get the pay and benefits they need and to check the power of corporations. Our Administration will protect the right to collectively bargain and will support worker organizations as they fight for their future.\nSupport Defined Benefit Pensions. These pensions are critical to providing a dignified retirement to people who dedicate their lives to public service. Our Administration will make sure Defined Benefit Pensions are supported and defended.`
    )
    
    waltzStances.push(waltz1)
    
    let waltz2 = new Stances (
    `Tim Waltz`,
    `Education`,
    `Our Administration will:\n\nFully and equitably fund our schools and reject the budgetary gimmicks we’ve used in the past, because all kids should have access to a high quality education regardless of their zip code. Our Administration will ensure funding for our schools that is not only stable, but equitable.\nSupport and listen to educators, and ensure every student has a caring, qualified, committed teacher.  Educators believe in children. It is not just a job, it’s a calling. We must ensure every educator has the resources, mentoring, time, and support they need. As trusted professionals, they are the best equipped to make decisions that impact their classrooms and students.\nWork intentionally to close the opportunity gap for all students across Minnesota. We must provide them the tools and time to learn. A child’s chance to succeed should not depend on living in a particular zip code. If we’re serious about every child’s future, let’s do what works. We need resources in all schools so students have the support professionals they need (nurses and school counselors), more one-on-one time to learn, inviting classrooms, and a well-rounded curriculum.\nSupport universal Pre-K for Minnesota’s kids. All students deserve learning opportunities at an early age. We need to pursue a two-generation strategy so that we are supporting kids and their families together. Early learning should also be better integrated with Minnesota’s child care assistance programs. We know opportunity gaps begin early. By addressing education equity early we will provide all of our kids a chance to succeed.\nPrioritize education funding coming from the state. Communities should not be reliant entirely on local property taxes to fund schools – that’s a recipe for racial and geographic disparities.\nFollow best practices on recruiting educators of color and providing a diverse teaching staff. Some students go all the way through grade school without having an educator who looks like them or who shares similar cultural experiences. It is important to expose children to a diverse teaching staff. Let’s follow the research on recruiting educators of color, including increasing educator salaries and looking into loan forgiveness for educators of color willing to work in high needs fields of education.\nNix vouchers – In order to give Minnesota students the best chance at success, we need to keep funding to our public schools, not diverting it into voucher programs.\nGiving every Minnesotan a shot at higher education.  Provide 2 years tuition free education at Minnesota state institutions for individuals whose families make less than 125k a year.`
    )
    
    waltzStances.push(waltz2)
    
    let waltz3 = new Stances (
    `Tim Waltz`,
    `Energy, Environment, and Climate`,
    `Our Administration will:\n\nExpand the Renewable Energy Standard to end our dependence on fossil fuels. Minnesota already gets 21% of its energy from renewable sources. And thousands of Minnesotans from all over the state now work in the clean energy economy. To continue to grow this sector, Our Administration support increasing our renewable energy standard to ensure that by 2030, at least 50% of our energy comes from renewables.\nReduce carbon emissions in all sectors to fight climate change. Our Administration support reducing greenhouse gas emissions by 80% by 2050 and as Governor and Lt. Governor, they will work to make sure that we reduce emissions in all sectors of the economy.\nWork with farmers on clean water solutions across Minnesota. Farming is vital to Minnesota’s economy. Farmers are great stewards of the land and Our Administration will work alongside them to enact policies and programs that support innovative farming practices, like cover crops and drainage water management, which clean our water and improve a farmer’s bottom line.\nFight for energy justice. The environmental challenges facing Minnesota often have a disproportionate impact on low-income Minnesotans, communities of color, the elderly, and children. These impacts amplify the economic and health challenges these communities face. As Governor and Lt. Governor, Our Administration will incorporate the values of environmental justice and robust stakeholder engagement initiatives across the State’s Executive Branch agencies.\nFollow Minnesota’s processes when considering new projects.  Minnesota has one of the most stringent environmental review processes in the country. As Minnesota is considering new energy projects, Our Administration will follow these processes before making any decisions.\nAdvocate for tribal rights while assessing Minnesota projects. Our Administration have been working from the beginning to make sure that tribal concerns over Line 3 are heard and addressed. Tim submitted a letter to the Public Utilities Commission expressing his concern that tribal rights be respected through the review process.`
    )
    
    waltzStances.push(waltz3)
    
    let waltz4 = new Stances (
    `Tim Waltz`,
    `Transportation`,
    `Our Administration will:\n\nSecure a stable funding source for transit and transportation by increasing the gas tax because Minnesota must modernize and expand our transportation and transit system in order to connect more people to opportunity and to compete for major employers and the jobs they bring to our state. To meet our current and future needs, Our Administration will increase the gas tax and expand funding for transit and transportation in a way that is fair and equitable.\nExpand the transit network both in the metro and in rural Minnesota to help take commuters off the road, make less congestion for those who choose to drive, reduce pollution, and save wear and tear on our roads. Younger generations increasingly show a preference for transit, while older residents look to transit to keep them mobile and in their homes longer. Our Administration support expanding bus networks across the state. They also support strategic investments in high speed commuter rail, light rail and bus rapid transit projects, which move even more people at greater speeds.\nBuild a stronger partnership with employers and freight haulers since the movement of freight around this state impacts jobs, our environment, and our cost of living. Our Administration will engage the businesses, farmers and others hauling freight through our state in a conversation about how our transportation system can be more efficient for freight haulers while still protecting the needs of our communities.\nCreate a taskforce on the future of transportation because travel patterns are changing and more people are choosing to bike and walk. Others are choosing to utilize ride sharing services or to maximize their income by driving for one of these services. Autonomous vehicles are on the horizon. To keep pace with the changes we’re experiencing, Our Administration will convene a One Minnesota taskforce on the future of transportation in our state.`
    )
    
    waltzStances.push(waltz4)
    
    let waltz5 = new Stances (
    `Tim Waltz`,
    `American Indian Issues`,
    `Our Administration will:\nHonor tribal sovereignty and government to government relationships. Minnesota’s tribes are sovereign nations and should be treated as such. Treaty rights must be regarded as the supreme law of the land and will be honored. Tribal governments will be consulted in decision making on the front end. When our tribal communities are thriving in Minnesota, the entire state benefits.\nPrioritize equitable education for Native students.\nMake BIE school funding permanent, invest in Dakota and Ojibwe language immersion programs in culturally contextualized schools\nEnsure history and culture of Native people are included in Minnesota’s K-12 education system\nSupport and fund Adult Basic Education programs, career skill development for Native adults\nWork with tribal agencies, non-profits and especially schools to provide wrap around services for Native students and their families\nSupport tuition waivers for Native American students in higher education – with priority given to future educators\nWork in collaboration with tribes to combat the opioid crisis.\nLessen barriers to treatment by providing funds to expand culturally competent long-term treatment programs\nAcknowledge and work to heal multi-generational and historic trauma\nIncrease access to harm-reduction methods and non-judgmental, non-coercive services\nProtect and invest in the well being Native American children and their families.\nFund public housing, food stability and supportive assistance programs and work with tribes to create stable family networks\nEducate those working with Native American families on historical trauma and Native families’ increased vulnerability\nCommit to addressing systemic racism and implicit bias in state agencies\nRecognize that Native American children are best served by being placed with Native families – reduce barriers for Native families to take custody of their relatives`
    )
    
    waltzStances.push(waltz5)
    
    let waltz6 = new Stances (
    `Tim Waltz`,
    `Gun Violence Prevention`,
    `Our Administration wants to keep families safe and let Minnesotans enjoy their Second Amendment rights:\n\nSupport a Ban on Assault Weapons in Minnesota. Tim has long said that he’s open to an assault weapons ban, and he’s seen enough – we need a ban on military style assault rifles in Minnesota.\nPass Universal Background Checks. The facts don’t lie – in states where there are universal background check laws on the books, there are 52 percent fewer mass shootings. 48 percent fewer law enforcement officials are shot to death with handguns. 48 percent fewer people commit suicide by firearm. This is a step we can take to keep guns out of the hands of those who shouldn’t have them.\nFight dangerous “Stand Your Ground” bills. Research conducted by the American Medical Association tells us that states with “Stand your Ground” laws on the books see a significant spike in homicide by firearm. This bill would be a non-starter in Our Administration’s administration.\nFund our public institutions to do research into gun violence If Washington won’t fund research into gun violence, Minnesota will. Our Administration will work to pass legislation that funds our public institutions to conduct research into gun violence prevention.\nInstitute the Gun Violence Prevention Order in Minnesota. This common sense law would enable law enforcement and family members to petition a court to prohibit an individual from possessing firearms if a judge finds they pose a significant danger to themselves or others.\nBuild the coalition to make progress on gun violence prevention. Minnesota had to fend off destructive legislation this year that would have made our communities less safe. As a lifelong sportsman and hunter, Tim has the credibility among law-abiding gun owners to build the coalitions necessary to finally get things done on this issue.`
    )
    
    waltzStances.push(waltz6)
    
    let waltz7 = new Stances (
    `Tim Waltz`,
    `Economy`,
    `Our Administration will continue Minnesota’s leadership in progressive action, securing broad prosperity for all. Our Administration will:\n\nGuarantee and fully fund pre-K and K-12 education for our children, making Minnesota the “education state” and creating a workforce that propels Minnesota’s growth. Minnesota can and should continue to create the industries of tomorrow.\nStand up for our unions. Union membership is the surest pathway to the middle class. Our Administration will stand up against assaults on our right to collective bargaining and push back against so-called “Right to Work” legislation.\nRemove barriers to growth by encouraging equity and inclusion. Initiatives like connecting rural residents to the internet through dramatically expanded broadband and closing the opportunity gap for minorities not only creates fairness, it creates economic growth.\nImprove our infrastructure by passing a $1 billion dollar bonding bill that will include badly needed funding for highways, bridges, mass transit, and bikeways at the state, metro and local levels.\nSupport Minnesota’s businesses while keeping working Minnesotans at the forefront. Minnesota has a fantastic workforce and a great quality of life. Government should serve Minnesota’s families. Our Administration support re-investing in the Minnesota Investment Fund and Minnesota Job Creation Fund to help start-up companies create new jobs.\nExpand the Middle Class and encourage people to organize. Our state government should protect our economy from increasing concentration of wealth in the top one percent. One way to ensure that is removing barriers so that workers are free to organize. Another is to expand the Working Family Tax Credit and other tax breaks for the lower- and middle-class, while ensuring that the top one percent pay their fair share.`
    )
    
    waltzStances.push(waltz7)
    
    let waltz8 = new Stances (
    `Tim Waltz`,
    `Health Care`,
    `Our Administration will:\n\nProvide a strong public health care option for any Minnesotan who wants it. Tim believes that a single payer type system is on Minnesota’s horizon, but that immediate action needs to be taken to control costs and improve care. Minnesotans don’t have to wait for the federal government to act. We have a public health care option right now—MinnesotaCare—that delivers high quality care at a price Minnesotans can afford. Our Administration will fight for it on Day One.\nBring the best health care minds and Minnesota families facing health care challenges together. Our Administration will build a One Minnesota coalition focused on reducing health care costs and increasing Minnesotans’ access to real health care that makes sense for their community.\nTackling barriers to mental health care. The impact of mental health in our communities has been ignored for too long. Access to affordable mental health care is a right, too. It’s time we listen to and deliver for Minnesotans and their families facing mental health challenges. They deserve our love, respect and commitment to meaningful action.\nMake additional investments into medical research here in Minnesota. Minnesota is poised to make huge steps forward on the prevention side of health care, which experts agree will bring down costs. With Minnesota’s great public institutions,  our medical device industry, and our premier medical facilities, Our Administration think that Minnesota is where we can find the solutions that will change the game when it comes to bringing health care costs down.\nStand with organizations that support women’s health. Tim believes in a woman’s right to choose and has a 100% voting record with Planned Parenthood. He will continue this support as Governor.`
    )
    
    waltzStances.push(waltz8)
    
    let waltz9 = new Stances (
    `Tim Waltz`,
    `Racial Equity`,
    `Our Administration will:\n\nMake access to education for everyone a priority. We know that there are investments that Minnesota can make to help students from diverse backgrounds. That includes programs that encourage hiring more people of color and indigenous people as teachers and getting POCI students exposure to careers in STEM.\nNurture healthy families across Minnesota. We must make meaningful investments into improving access to childcare, invest in families that want to combat the opioid epidemic, and ensure that health care providers are providing culturally competent care.\nProvide economic opportunities for every Minnesotan. When Minnesota has a surplus, we should use that money to in invest in our communities, not give tax break to tobacco companies and the wealthiest Minnesotans. This includes targeted job creation programs in communities of color and indigenous communities.\nPush for criminal justice reform and civil rights for everyone. Our Administration favor creating a taxation and regulation system for adult-use cannabis in Minnesota. African Americans in Minnesota are negatively and disproportionately impacted by these laws. They also support outlawing private prisons in Minnesota – There should be no profit motive attached to recidivism.`
    )
    
    waltzStances.push(waltz9)
    
    let waltz10 = new Stances (
    `Tim Waltz`,
    `Agriculture`,
    `Our Administration will:\n\nWork aggressively to expand markets and make sure our producers and businesses have the level playing field they need to compete in our global marketplace.\nPartner with our farmers and businesses to unleash Minnesota’s innovative spirit to add value to farm commodities and create good paying jobs across our state.\nSupport new and beginning farmers by helping them overcome barriers to entry and find opportunities to carry on Minnesota’s strong farming traditions.\nInvest in agriculture-related research to continue enhancing productivity of Minnesota agriculture and develop new win-win solutions to complex problems.\nSupport the growth of organic and locally grown products that offer new opportunities for both rural and urban Minnesotans to be part of Minnesota’s strong agricultural tradition.\nAchieve cleaner water by working together and looking for win-win solutions to this complex problem.`
    )
    
    waltzStances.push(waltz10)
    
    let waltz11 = new Stances (
    `Tim Waltz`,
    `Childcare`,
    `Our Administration will support families by working to make child care more affordable and accessible for all. Our Administration will:\n\nIncrease the Child and Dependent Care tax credit that is available to low-income families to help cover the costs of child care.\nIncrease income limits for the Child and Dependent Care tax credit to make sure more Minnesota families can get the support they need to work and care for their kids.\nFully fund and forecast the Child Care Assistance Program.\nRemove red tape and fees that make opening and running a child care program unnecessarily difficult and costly.\nCreate a Child Care Innovation Center, which will offer seed funding, training, and technical assistance to folks who want to start a child care program.\nSupport progressive paid parental leave policies, so that all parents are able to stay home as they welcome a new member to their family.`
    )
    
    waltzStances.push(waltz11)
    
    let waltz12 = new Stances (
    `Tim Waltz`,
    `LGBTQ Minnesotans`,
    `Our Administration wants every Minnesotan to feel safe in their communities, regardless of sexual orientation and gender identity:\n\nStand against so-called “Bathroom Bills.” These bills only serve to endanger trans people while doing nothing to make our schools safer.\nBan the harmful practice of “Conversion Therapy.” Time to send this cruel practice to the ashbin of history where it belongs.\nTake on bullying and harassment in schools. Minnesota kids can’t learn if they don’t feel safe in school. Our Administration will build on the work on the anti-bullying bill passed during the 2014 legislative session.`
    )
    
    waltzStances.push(waltz12)
    








let waltzGov = new Governor (
    `Tim Waltz`,
    `https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/tim-walz-head_150.jpg`,
    `DFL`,
    `http://www.walzforgovernor.org/`,
    waltzStances
    )

let murphyGov = new Governor (
    `Erin Murphy`,
    `https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/erin-murphy_150.jpg`,
    `DFL`,
    `http://www.murphyformn.com/`,
    murphyStances
    )

let johnsonGov = new Governor (
    `Jeff Johnson`,
    `https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/jeff-johnson_150.jpg`,
    `Republican`,
    `http://www.johnsonforgovernor.org/`,
    johnsonStances
    )

let parrishGov = new Governor (
    `Phillip Parrish`,
    `https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/phillip-parrish_150.jpg`,
    `Republican`,
    `https://parrish4mn.com/`,
    parrishStances
    )

let stephensGov = new Governor (
    `Mary Giuliani Stephens`,
    `https://s3.amazonaws.com/data.minnpost/projects/minnpost-whos-running-2018/candidate-photos/mary-giuliani-stephens_150.jpg`,
    `Republican`,
    `https://maryformngov.com/`,
    stephensStances
    )

// Testing that the elements show in the arrays
// console.log(governors[0].stances[0].issue);
    
module.exports = {
    governors,
    stances,
    }