# Updating

This one is slightly different.

* Go to https://jitpack.io/#oraxen/oraxen
* Get latest commit
* Replace version w/ latest commit

# Manual Fixes

* Remove `  readonly constructor: CustomListenerConstructor;` on line 951. Need to figure out the proper types.

* `  static build(): ItemStack;` to `OraxenItems` on about line 1342. 
  * add import `import { ItemStack } from 'org.bukkit.inventory';` on about line 1319.