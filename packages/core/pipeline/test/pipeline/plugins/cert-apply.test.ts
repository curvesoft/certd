import { expect } from "chai";
import "mocha";
import { CertApplyPlugin } from "../../../src/plugin/plugins";
import { pluginInitProps } from "../init.test";
describe("CertApply", function () {
  it("#execute", async function () {
    this.timeout(120000);
    const plugin = new CertApplyPlugin();
    // @ts-ignore
    delete plugin.define;
    await plugin.doInit(pluginInitProps);
    const output = await plugin.execute({
      domains: ["*.docmirror.cn", "docmirror.cn"],
      email: "xiaojunnuo@qq.com",
      dnsProviderType: "aliyun",
      accessId: "111",
      forceUpdate: true,
    });
    const cert = output.cert;
    expect(plugin.getDefine().name).eq("CertApply");
    expect(cert.crt != null).eq(true);
  });
});
