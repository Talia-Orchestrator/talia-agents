'use strict';
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..', 'packages');
const dirs = fs.readdirSync(root).filter(name => fs.statSync(path.join(root, name)).isDirectory()).sort();
const canonical = ['contentwriter', 'deepresearcher', 'ecommerce-researcher', 'imagestudio', 'officeworker', 'pptmaker', 'productdeveloper', 'seogeoagent', 'uidesigner', 'videostudio'];
test('source keeps all legacy agents while naming exactly ten canonical specialists', () => {
  assert.equal(dirs.length, 19);
  for (const name of [...canonical, 'assistant', 'general-researcher']) assert.ok(dirs.includes(name));
  const ids = new Set();
  for (const dir of dirs) {
    const metadata = JSON.parse(fs.readFileSync(path.join(root, dir, 'talia-extension.json'), 'utf8'));
    const agent = JSON.parse(fs.readFileSync(path.join(root, dir, 'agent.json'), 'utf8'));
    assert.equal(metadata.kind, 'agent');
    assert.equal(metadata.publisher, 'talia-agents');
    assert.ok(metadata.id.startsWith('talia-agents/'));
    assert.equal(ids.has(metadata.id), false);
    ids.add(metadata.id);
    assert.ok(Array.isArray(agent.skill_list));
    assert.ok(fs.statSync(path.join(root, dir, 'LICENSE')).isFile());
    assert.ok(fs.statSync(path.join(root, dir, 'NOTICE')).isFile());
  }
  assert.ok(fs.existsSync(path.join(root, 'ecommerceresearcher', 'agent.json')));
  assert.ok(fs.existsSync(path.join(root, 'ecommerce-researcher', 'agent.json')));
});
