import type { RiftPluginApi } from "@riftlabs/plugin-sdk";

export default function plugin(bb: RiftPluginApi) {
  bb.log.info("loaded");
}
